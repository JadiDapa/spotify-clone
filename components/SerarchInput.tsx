"use client";

import qs from "query-string";

import useDebounce from "@/hooks/UseDebounce";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Input from "./Input";

const SerarchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debounceValue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: debounceValue,
    };

    const url = qs.stringifyUrl({
      url: "/search",
      query: query,
    });

    router.push(url);
  }, [debounceValue, router]);

  return (
    <Input
      placeholder="Search what do you want to listen"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SerarchInput;
