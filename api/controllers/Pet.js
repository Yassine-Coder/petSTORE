import Hotel from "../models/Pet.js";

export const createPet = async (req, res, next) => {
  const newHotel = new Pet(req.body);

  try {
    const savedPet = await newPet.save();
    res.status(200).json(savedPet);
  } catch (err) {
    next(err);
  }
};
export const updatePet = async (req, res, next) => {
  try {
    const updatedPet = await Pet.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedPet);
  } catch (err) {
    next(err);
  }
};
export const deletePet = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getPet = async (req, res, next) => {
  try {
    const hotel = await Pet.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};
export const getPets = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const pets = await Pet.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(pets);
  } catch (err) {
    next(err);
  }
};
export const countByStatus = async (req, res, next) => {
  const statuss = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      statuss.map((status) => {
        return Hotel.countDocuments({ status: status });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
