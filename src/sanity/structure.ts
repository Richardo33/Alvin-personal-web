import type { StructureResolver } from "sanity/structure";

const singletonTypes = new Set(["profile"]);

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Portfolio CMS")
    .items([
      S.listItem()
        .title("Profile")
        .schemaType("profile")
        .child(
          S.document()
            .schemaType("profile")
            .documentId("profile")
            .title("Profile")
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !singletonTypes.has(listItem.getId() ?? "")
      ),
    ]);
