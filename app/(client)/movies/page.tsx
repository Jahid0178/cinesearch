import React from "react";
import MoviesSection from "@/app/(client)/movies/_components/MoviesSection";
import {fetchSearchMovies} from "@/lib/actions/actions";
import {TMDBResponseType} from "@/typescript/types";

interface MoviesPageProps {
    searchParams: {
        search: string;
    }
}

const MoviesPage = async ({searchParams}: MoviesPageProps): Promise<React.JSX.Element> => {

    const {search} = searchParams;

    const data: TMDBResponseType | undefined = await fetchSearchMovies(search);

    return <MoviesSection movies={data?.results || []}/>;
};

export default MoviesPage;
