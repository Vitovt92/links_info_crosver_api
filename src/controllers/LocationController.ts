import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { Locations } from "../entity/dev_links_info_2/entities/Locations";

class LocationController {
  static listAll = async (req: Request, res: Response) => {
    const locationRepository = getRepository(Locations);
    const locations = await locationRepository.find();

    res.send(locations);
  };
}

export default LocationController;
