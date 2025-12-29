// Mock Data
const menuItems = [
  { id: 1, name: "Espresso", description: "Rich and bold Italian espresso", price: 299, oldPrice: 399, image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400", category: "hot", rating: 4.8 },
  { id: 2, name: "Cappuccino", description: "Classic cappuccino with foam art", price: 349, oldPrice: 449, image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400", category: "hot", rating: 4.9 },
  { id: 3, name: "Iced Latte", description: "Smooth cold coffee with milk", price: 399, oldPrice: 499, image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400", category: "cold", rating: 4.7 },
  { id: 4, name: "Mocha", description: "Coffee with chocolate goodness", price: 429, oldPrice: 529, image: "https://images.unsplash.com/photo-1578374173703-14c7a4c09366?w=400", category: "hot", rating: 4.6 },
  { id: 5, name: "Cold Brew", description: "Smooth, bold cold-steeped coffee", price: 449, oldPrice: 549, image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400", category: "cold", rating: 4.8 },
  { id: 6, name: "Americano", description: "Classic espresso with hot water", price: 279, oldPrice: 379, image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400", category: "hot", rating: 4.5 }
];

const products = [
  { id: 1, name: "Premium Arabica Beans", description: "1kg freshly roasted beans", price: 1199, oldPrice: 1499, image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400", rating: 4.9, inStock: true },
  { id: 2, name: "Espresso Blend", description: "500g dark roast blend", price: 899, oldPrice: 1099, image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400", rating: 4.8, inStock: true },
  { id: 3, name: "Coffee Starter Kit", description: "Complete brewing set", price: 2499, oldPrice: 2999, image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400", rating: 4.7, inStock: false }
];

const reviews = [
  { id: 1, name: "Sarah Johnson", text: "Best coffee shop in town! The atmosphere is cozy and the coffee is absolutely divine. Highly recommend the cappuccino!", rating: 5, image: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Michael Chen", text: "Amazing quality beans and friendly staff. Their cold brew is my go-to morning drink. Never disappoints!", rating: 5, image: "https://i.pravatar.cc/150?img=13" },
  { id: 3, name: "Emma Davis", text: "Love the modern ambiance and variety of options. Perfect spot for both work and relaxation. The pastries are great too!", rating: 4, image: "https://i.pravatar.cc/150?img=5" }
];

const blogs = [
  { id: 1, title: "The Art of Coffee Brewing", date: "Dec 20, 2024", excerpt: "Discover the secrets behind brewing the perfect cup of coffee at home...", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600" },
  { id: 2, title: "Health Benefits of Coffee", date: "Dec 18, 2024", excerpt: "Explore the science-backed health benefits of your daily coffee ritual...", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600" },
  { id: 3, title: "Coffee Culture Around World", date: "Dec 15, 2024", excerpt: "A journey through global coffee traditions and brewing methods...", image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600" }
];