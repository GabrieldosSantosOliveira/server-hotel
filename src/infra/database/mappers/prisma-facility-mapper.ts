import { Facility } from '@application/entities/Facility';
import { Facility as RawFacility } from '@prisma/client';
export class PrismaFacilityMapper {
  static toPrisma(facility: Facility): RawFacility {
    return {
      createdAt: facility.createdAt,
      id: facility.id,
      name: facility.name,
      updatedAt: facility.updatedAt,
    };
  }
  static toDomain(rawFacility: RawFacility): Facility {
    return new Facility({
      name: rawFacility.name,
      createdAt: rawFacility.createdAt,
      id: rawFacility.id,
      updatedAt: rawFacility.updatedAt,
    });
  }
}
