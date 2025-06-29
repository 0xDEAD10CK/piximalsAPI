import { Ability, EffectType, Item, Prisma, PrismaClient, PrismaPromise } from "@prisma/client"
const prisma = new PrismaClient()


export const getTotalItemCount = async (filterOptions:any) => {
    return await prisma.item.count({
        where: filterOptions.where,
    });
};

export const getTotalAbilityCount = async (filterOptions:any) => {
    return await prisma.ability.count({
        where: filterOptions.where,
    });
};

export const getItemsFilter = async (
        pageSize: number,
        skip: number,
        type?: EffectType | string,
        name?: string,
        rarity?: string
    ): Promise<[Item[], Prisma.ItemWhereInput]> => {
  const filterOptions: Prisma.ItemFindManyArgs = {
    where: {},
    take: pageSize,
    skip,
  };

  if (type) {
    filterOptions.where = {
      ...filterOptions.where,
      type: {
        contains: type,
        mode: 'insensitive',
      },
    };
  }

  if (rarity) {
    filterOptions.where = {
      ...filterOptions.where,
      rarity: {
        contains: rarity,
        mode: 'insensitive',
      },
    };
  }

  if (name) {
    filterOptions.where = {
      ...filterOptions.where,
      name: {
        contains: name,
        mode: 'insensitive',
      },
    };
  }

  const items = await prisma.item.findMany(filterOptions);

  return [items, filterOptions.where ?? {}];
};


export const getAbilitiesFilter = async (
        pageSize: number,
        skip: number,
        type?: EffectType | string,
        name?: string,
        category?: string
    ): Promise<[Ability[], Prisma.AbilityWhereInput]> => {
    const filterOptions = {
        where: {},
        take: pageSize,
        skip: skip
    };

      if (type) {
        filterOptions.where = {
        ...filterOptions.where,
        type: {
            contains: type,
            mode: 'insensitive', // optional, for case-insensitive filtering
        },
        };
    }

    if (name) {
        filterOptions.where = {
        ...filterOptions.where,
        name: {
            contains: name,
            mode: 'insensitive',
        },
        };
    }

    if (category) {
        filterOptions.where = {
        ...filterOptions.where,
        category: {
            contains: category,
            mode: 'insensitive',
        },
        };
    }

    const abilities = await prisma.ability.findMany(filterOptions); 

    return [abilities, filterOptions.where];
}