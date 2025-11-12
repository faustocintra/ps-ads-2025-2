import fetchAuth from '../../lib/fetchAuth'
import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { parseISO } from 'date-fns'
import { feedbackWait, feedbackNotify, feedbackConfirm } from '../../ui/Feedback'
import { useNavigate, useParams } from 'react-router-dom'
import { useMask } from '@react-input/mask'
import { Checkbox, FormControlLabel } from '@mui/material'
import Car from '../../models/Car.js'
import { ZodError } from 'zod'

export default function CarsForm() {

  const carsColor = [
    { value: "Amarelo", label: "Amarelo" },
    { value: "Azul", label: "Azul" },
    { value: "Branco", label: "Branco" },
    { value: "Carmim", label: "Carmim" },
    { value: "Ciano", label: "Ciano" },
    { value: "Cinza", label: "Cinza" },
    { value: "Dourado", label: "Dourado" },
    { value: "Marrom", label: "Marrom" },
    { value: "Prata", label: "Prata" },
    { value: "Preto", label: "Preto" },
    { value: "Roxo", label: "Roxo" },
    { value: "Verde", label: "Verde" },
    { value: "Vermelho", label: "Vermelho" },
    { value: "Vinho", label: "Vinho" }
  ]

  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = currentYear; year >= 1951; year--) {
    years.push({ value: year, label: year.toString() });
  }


  const platesRef = useMask({
    mask: "aaa-9$99",
    replacement: { 
      'a': /[A-Z]/,      // apenas letras maiúsculas
      '9': /[0-9]/,      // dígitos
      '$': /[A-J0-9]/    // letra de A a J ou dígito
    },
    showMask: false
  })

  const formDefaults = {
    brand: '',
    model: '',
    color: '',
    year_manufacture: '',
    imported: false,             // inicialmente booleano
    plates: '',
    selling_price: '',
    selling_date: null
  }

  const navigate = useNavigate()
  const params = useParams()

  // Variáveis de estado
  const [state, setState] = React.useState({
    car: { ...formDefaults },
    formModified: false,
    inputErrors: {}
  })
  const {
    car,
    formModified,
    inputErrors
  } = state

  React.useEffect(() => {
    if(params.id) loadData()
  }, [])

  async function loadData() {
    feedbackWait(true)
    try {
      // Corrigido: buscar /cars/:id (antes estava /customers/:id)
      const result = await fetchAuth.get(`/cars/${params.id}`)

      if(result.selling_date) result.selling_date = parseISO(result.selling_date)

      setState({ ...state, car: result })
    }
    catch(error) {
      console.error(error)
      feedbackNotify('ERRO: ' + error.message)
    }
    finally {
      feedbackWait(false)
    }
  }

  function handleFieldChange(event) {
    console.log('CAMPO MODIFICADO:', {
      name: event.target.name,
      value: event.target.value
    })

    const carCopy = { ...car }
    carCopy[event.target.name] = event.target.value
    setState({ ...state, car: carCopy, formModified: true })
  }

  async function handleFormSubmit(event) {
    event.preventDefault()
    feedbackWait(true)
    try {
      // Validação local via Zod
      Car.parse(car)

      if(params.id) {
        await fetchAuth.put(`/cars/${params.id}`, car)
      }
      else {
        await fetchAuth.post('/cars', car)
      }

      feedbackNotify('Item salvo com sucesso.', 'success', 2500, () => {
        navigate('..', { relative: 'path', replace: true })
      })
    }
    catch(error) {
      console.error(error)

      if (error instanceof ZodError) {
        const errorMessages = {}
        for (let i of error.issues) errorMessages[i.path[0]] = i.message
        setState({ ...state, inputErrors: errorMessages })
        feedbackNotify('Há campos com valores inválidos. Verifique.', 'error')
      }
      else {
        feedbackNotify('ERRO: ' + error.message, 'error')
      }
    }
    finally {
      feedbackWait(false)
    }
  }

  async function handleBackButtonClick() {
    if(
      formModified &&
      ! await feedbackConfirm('Há informações não salvas. Deseja realmente sair?')
    ) return

    navigate('..', { relative: 'path', replace: 'true' })
  }

  return <>
    <Typography variant="h1" gutterBottom>
      Cadastro de Veiculos
    </Typography>

    <Box className="form-fields">
      <form onSubmit={handleFormSubmit}>

        <TextField 
          variant="outlined"
          name="brand"
          label="Marca"
          fullWidth
          required
          autoFocus
          value={car.brand}
          onChange={handleFieldChange}
          error={!!inputErrors?.brand}
          helperText={inputErrors?.brand}
        />

        <div className="MuiFormControl-root">
          <FormControlLabel
            control={
              <Checkbox
                checked={!!car.imported}
                onChange={e => {
                  const event = { target: { name: 'imported', value: e.target.checked } }
                  handleFieldChange(event)
                }}
              />
            }
            label="Importado"
          />
        </div>

        <TextField
          variant="outlined"
          name="model"
          label="Modelo"
          fullWidth
          required
          value={car.model}
          onChange={handleFieldChange}
          error={!!inputErrors?.model}
          helperText={inputErrors?.model}
        />

        <TextField
          inputRef={platesRef}
          variant="outlined"
          name="plates"
          label="Placa"
          fullWidth
          required
          value={car.plates}
          onChange={handleFieldChange}
          error={!!inputErrors?.plates}
          helperText={inputErrors?.plates}
        />

        <TextField
          variant="outlined" 
          name="color"
          label="Cor" 
          fullWidth
          required
          value={car.color}
          select
          onChange={handleFieldChange}
          error={!!inputErrors?.color}
          helperText={inputErrors?.color}
        >
          {
            carsColor.map(c => 
              <MenuItem key={c.value} value={c.value}>
                {c.label}
              </MenuItem>
            )
          }
        </TextField>
        
        <TextField
          variant="outlined"
          name="selling_price"
          label="Preço de Venda"
          fullWidth
          required
          inputMode="numeric"
          value={car.selling_price}
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d*$/.test(value)) {
              handleFieldChange(e);
            }
          }}
          error={!!inputErrors?.selling_price}
          helperText={inputErrors?.selling_price}
        />

        <TextField
          variant="outlined"
          name="year_manufacture"
          label="Ano de Fabricação"
          fullWidth
          required
          value={car.year_manufacture}
          select
          onChange={handleFieldChange}
          error={!!inputErrors?.year_manufacture}
          helperText={inputErrors?.year_manufacture}
        >
          {
            years.map(y => 
              <MenuItem key={y.value} value={y.value}>
                {y.label}
              </MenuItem>
            )
          }
        </TextField>
        
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
          <DatePicker 
            label="Data de Venda"
            value={car.selling_date}
            slotProps={{
              textField: {
                variant: "outlined",
                fullWidth: true,
                error: !!inputErrors?.selling_date,
                helperText: inputErrors?.selling_date
              }
            }}
            onChange={ date => {
              const event = { target: { name: 'selling_date', value: date } }
              handleFieldChange(event)
            }}
          />
        </LocalizationProvider>

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%'
        }}>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
          >
            Salvar
          </Button>
          <Button
            variant="outlined"
            onClick={handleBackButtonClick}
          >
            Voltar
          </Button>
        </Box>

        <Box sx={{
          fontFamily: 'monospace',
          display: 'flex',
          flexDirection: 'column',
          width: '100vw'
        }}>
          { JSON.stringify(car, null, ' ') }
        </Box>

      </form>
    </Box>
  </>
}