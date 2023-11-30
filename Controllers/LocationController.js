// Modules

import satelize from "satelize";

import ip from "what-is-my-ip-address";

// Get Request

const getLocation = async (req, res) => {
  try {
    const loc = await ip.v4();

    satelize.satelize({ ip: loc }, (err, address) => {
      if (err) {
        return res.status(404).send("");
      }

      return res.status(200).send(address.country.en);
    });
  } catch {
    return res.status(404).send("");
  }
};

export default getLocation;
