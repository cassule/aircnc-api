const Booking = require('../models/Booking')

module.exports = {
  async store (req, res) {
    // eslint-disable-next-line camelcase
    const { user_id } = req.headers
    // eslint-disable-next-line camelcase
    const { spot_id } = req.param
    const { date } = req.body

    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date
    })

    return res.json(booking)
  }
}
