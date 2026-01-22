import React from 'react';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';
import Card from '../components/Card';
import { Star, ArrowRight } from 'lucide-react';
import heroImage from '../assets/hero.png';

const featuredDestinations = [
    {
        id: 1,
        name: 'Bali, Indonesia',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 1240,
        price: '$850',
        days: '7 Days'
    },
    {
        id: 2,
        name: 'Santorini, Greece',
        image: 'https://images.unsplash.com/photo-1613395877344-13d4c79e4274?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 850,
        price: '$1200',
        days: '5 Days'
    },
    {
        id: 3,
        name: 'Kyoto, Japan',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 2100,
        price: '$1500',
        days: '10 Days'
    }
];

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.7)',
                    zIndex: -1
                }} />

                <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-lg)' }}>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 700, textShadow: '0 2px 4px rgba(0,0,0,0.3)', marginBottom: '0.5rem' }}>
                        Discover Your Next Adventure
                    </h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
                        Explore the world's most beautiful destinations and plan the perfect vacation effortlessly.
                    </p>

                    <SearchBar />
                </div>
            </section>

            {/* Featured Destinations */}
            <section style={{ padding: 'var(--spacing-2xl) 0', backgroundColor: 'var(--color-bg)' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-xl)' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-xs)', color: 'var(--color-text-main)' }}>Popular Destinations</h2>
                            <p style={{ color: 'var(--color-text-secondary)' }}>Travelers choice from around the world</p>
                        </div>
                        <Button variant="ghost" className="flex-center">
                            View All <ArrowRight size={16} />
                        </Button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
                        {featuredDestinations.map(dest => (
                            <Card key={dest.id} padding="none" style={{ overflow: 'hidden', transition: 'transform 0.2s', cursor: 'pointer' }} className="hover:transform hover:-translate-y-1">
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img src={dest.image} alt={dest.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} />
                                </div>
                                <div style={{ padding: 'var(--spacing-md)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-xs)' }}>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{dest.name}</h3>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#F59E0B' }}>
                                            <Star size={16} fill="#F59E0B" />
                                            <span style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>{dest.rating}</span>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'var(--spacing-md)' }}>
                                        <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>{dest.days} • {dest.reviews} reviews</span>
                                        <span style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '1.125rem' }}>{dest.price}</span>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Prop */}
            <section style={{ padding: 'var(--spacing-2xl) 0', backgroundColor: 'white' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-xl)' }}>Why Plan With Us?</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--spacing-xl)' }}>
                        {[
                            { title: 'Best Price Guarantee', desc: 'Find the lowest prices for your trip.' },
                            { title: 'Easy Booking', desc: 'Book flights and hotels in one click.' },
                            { title: '24/7 Support', desc: 'We are here to help you anytime.' }
                        ].map((item, i) => (
                            <div key={i} style={{ flex: '1 1 300px', padding: 'var(--spacing-lg)' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-sm)', color: 'var(--color-secondary)' }}>{item.title}</h3>
                                <p style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
