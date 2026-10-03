import HomePage from "@/components/HomePage";
import { getDictionary } from "../dictionaries";
import type { Locale } from "@/lib/site";

export default async function Page({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);
  return <HomePage dict={dict} />;
}
