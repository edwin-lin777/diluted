type CompanyProps = {
    id?: string,
    name?: string,
    image?: string,
    description?: string,
    country?: string,
    long?: number,
    short?: number,
    elo?: number,
}

type AccountProps = {
    name: string,
    email: string,
    country: string,
}

type UpdateElo = {
    CompanyProps,
    longOrShort: boolean,
}

