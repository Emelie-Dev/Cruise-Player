// Modules


import satelize from "satelize";

import ip from "what-is-my-ip-address";

// Get Request

export const getLocation = (req, res) => {
  ip.v4()
    .then((loc) => {

      satelize.satelize({ ip: loc }, (err, address) => {
        if (err) {
   return res.status(404).send("");
          
        }
      return res.status(200).send(address.country.en);
      
        
      });
    })
    .catch((err) => {
      res.status(404).send("");
    });
};


