import { z } from 'zod'

const maxYear = new Date().getFullYear()
const minYear = new Date().getFullYear() - 65

const allowedColors = [
  'AMARELO', 'AZUL', 'BRANCO', 'CINZA', 'DOURADO',
  'LARANJA', 'MARROM', 'PRATA', 'PRETO', 'ROSA',
  'ROXO', 'VERDE', 'VERMELHO'
]

const Car = z.object({
  brand: z.string()
    .trim()
    .min(1, { message: 'Marca deve ter, no mínimo, 1 caractere.' })
    .max(25, { message: 'Marca pode ter, no máximo, 25 caracteres.' }),

  model: z.string()
    .trim()
    .min(1, { message: 'Modelo deve ter, no mínimo, 1 caractere.' })
    .max(25, { message: 'Modelo pode ter, no máximo, 25 caracteres.' }),

  color: z.string()
    .transform(val => String(val).toUpperCase())
    .refine(val => allowedColors.includes(val), { message: 'Cor inválida.' }),

  year_manufacture: z.coerce.number()
    .int({ message: 'Ano de fabricação deve ser um número inteiro.' })
    .min(minYear, { message: `Ano de fabricação não pode ser anterior a ${minYear}.` })
    .max(maxYear, { message: `Ano de fabricação não pode ser posterior a ${maxYear}.` }),

  imported: z.preprocess(
    val => typeof val === 'string' ? (val === 'true') : Boolean(val),
    z.boolean({ required_error: 'Campo imported deve ser booleano.' })
  ),

  plates: z.string()
    .trim()
    .length(9, { message: 'Placa deve ter exatamente 8 caracteres.' }),

  selling_date: z.coerce.date()
    .min(new Date('2020-03-20'), { message: 'Data de venda não pode ser anterior à abertura da loja (20/03/2020).' })
    .max(new Date(), { message: 'Data de venda não pode ser posterior a hoje.' })
    .nullish(),

  selling_price: z.coerce.number()
    .min(5000, { message: 'Preço de venda deve ser no mínimo R$ 5.000,00.' })
    .max(5000000, { message: 'Preço de venda deve ser no máximo R$ 5.000.000,00.' })
    .nullish()
})

export default Car