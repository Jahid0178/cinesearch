"use client";

import React from "react";
import Button from "../Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

type Inputs = {
  search: string;
};

const SearchBox = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const handleSearch: SubmitHandler<Inputs> = (data) => {
    router.push(`/movies?search=${data.search}`);
    reset();
  };

  return (
    <form
      className="flex items-center gap-2 relative"
      onSubmit={handleSubmit(handleSearch)}
    >
      <input
        type="text"
        id="search"
        placeholder="Search for movies, TV shows, and more"
        className="w-full outline-none text-black ps-3 py-3 rounded-md pr-24"
        {...register("search", { required: true })}
      />
      <Button
        className="btn-primary absolute right-1"
        type="submit"
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBox;
