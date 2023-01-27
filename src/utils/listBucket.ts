import { BucketItem } from "./bucketItem";

export function listBucket(sourceId: string) {
  // Return random number of BucketItem objects (max 1000)
  const numberOfItems = Math.floor(Math.random() * 1000);
  const items: BucketItem[] = [];
  for (let i = 0; i < numberOfItems; i++) {
    items.push({
      Key: `${sourceId}-key-${i}`,
      LastModified: new Date(),
      Size: Math.floor(Math.random() * 1000),
    });
  }
  return items;
}
