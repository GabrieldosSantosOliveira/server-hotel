import { Facilitie } from '@application/entities/Facilitie';
import { Facilitie as RawFacilitie } from '@prisma/client';
export class PrismaFacilitieMapper {
  static toPrisma(facilitie: Facilitie): RawFacilitie {
    return {
      createdAt: facilitie.createdAt,
      id: facilitie.id,
      name: facilitie.name,
      updatedAt: facilitie.updatedAt,
    };
  }
  static toDomain(rawFacilitie: RawFacilitie): Facilitie {
    return new Facilitie({
      name: rawFacilitie.name,
      createdAt: rawFacilitie.createdAt,
      id: rawFacilitie.id,
      updatedAt: rawFacilitie.updatedAt,
    });
  }
}
