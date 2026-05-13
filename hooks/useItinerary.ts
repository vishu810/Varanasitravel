import { useState } from 'react';

export function useItinerary() {
  const [itinerary, setItinerary] = useState<any[]>([]);

  const addItem = (item: any) => {
    setItinerary([...itinerary, item]);
  };

  return { itinerary, addItem };
}