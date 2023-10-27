import Category from "./Category";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../keystatic.config";

interface ListItem {
  readonly name: string;
  readonly details: string;
  readonly draft: boolean;
}

interface CategoryData {
  index: number;
  label: string;
  slug: string;
  dec: string;
  parah: string;
  listItem: readonly ListItem[] | ListItem[]; // Adjust this based on the actual return type
}

interface CategoryProps {
  category: CategoryData[];
}

const reader = createReader(process.cwd(), keystaticConfig);

export default async function Page() {
  const rawCategoryData = await reader.collections.category.all();

  // Map the raw data to match the structure of CategoryData
  const category = rawCategoryData.map((item, index) => ({
    index: index,
    label: item.entry.title,
    slug: item.slug,
    dec: item.entry.Maindec,
    parah: item.entry.parah,
    listItem: item.entry.list as ListItem[],
  }));
  return (
    <section className="w-screen h-[60vh]">
      <Category category={category} />
    </section>
  );
}
