const Booking = require('../models/Booking')

module.exports = {
  async store (req, res) {
    // eslint-disable-next-line camelcase
    const { user_id } = req.headers
    // eslint-disable-next-line camelcase
    const { spots_id } = req.params
    const { date } = req.body

    const booking = await Booking.create({
      user: user_id,
      spot: spots_id,
      date
    })

    await booking
      .populate('spot')
      .populate('user')
      .execPopulate()

    return res.json(booking)
  }
}
