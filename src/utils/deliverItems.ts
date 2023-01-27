import { BucketItem } from "./bucketItem";

export function deliverItems(
  sourceId: string,
  destinationId: string,
  items: BucketItem[]
) {
  console.log(
    `Delivering ${items.length} items from ${sourceId} to ${destinationId}`
  );

  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve(() => {
          console.log(
            `Delivered ${items.length} items from ${sourceId} to ${destinationId}`
          );
        }),
      1000
    )
  );
}
