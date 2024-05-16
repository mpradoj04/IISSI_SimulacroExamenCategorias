import { RestaurantCategory } from '../models/models.js'

const checkNoExistingCategory = async (req, res, next) => {
  try {
    const restC = await RestaurantCategory.findOne({
      where: { name: req.body.name }
    })
    if (restC !== null) {
      return res.status(422).send('There is already another category with the same name')
    } else {
      return next()
    }
  } catch (err) {
    return res.status(500).send(err)
  }
}

export { checkNoExistingCategory }
