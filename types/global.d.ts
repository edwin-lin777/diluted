type CompanyProps = {
    id?: string,
    name?: string,
    image?: string,
    description?: string,
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
    company: companyProps,
    longOrShort: boolean,
}

