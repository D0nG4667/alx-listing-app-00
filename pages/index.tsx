import CardGrid from '@/components/common/CardGrid';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <CardGrid
        cards={[
          {
            title: 'Luxury Villa in Riyadh',
            description: 'A beautiful 4-bedroom villa with pool and garden.',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
            discount: '60%',
            rating: 4.76,
            beds: 4,
            baths: 2,
            guests: '2–4',
            tags: ['Top Villa', 'Self CheckIn', 'Free Reschedule'],
            price: 2450,
          },
          {
            title: 'Modern Apartment',
            description: 'Located in the heart of Jeddah with a stunning city view.',
            image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
            rating: 4.9,
            beds: 3,
            baths: 2,
            guests: '2–6',
            tags: ['Private Pool', 'Breakfast Included'],
            price: 1800,
          },
        ]}
      />
    </main>
  );
}
