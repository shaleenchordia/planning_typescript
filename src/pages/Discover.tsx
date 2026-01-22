import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import { Search, Filter, Star } from 'lucide-react';

const destinations = [
    { id: 1, name: 'Bali, Indonesia', region: 'Asia', price: 850, rating: 4.8, type: 'Relaxing', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80' },
    { id: 2, name: 'Santorini, Greece', region: 'Europe', price: 1200, rating: 4.9, type: 'Romantic', image: 'https://images.unsplash.com/photo-1613395877344-13d4c79e4274?auto=format&fit=crop&w=800&q=80' },
    { id: 3, name: 'Kyoto, Japan', region: 'Asia', price: 1500, rating: 4.7, type: 'Cultural', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80' },
    { id: 4, name: 'Machu Picchu, Peru', region: 'South America', price: 1800, rating: 4.8, type: 'Adventure', image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80' },
    { id: 5, name: 'Reykjavik, Iceland', region: 'Europe', price: 2000, rating: 4.6, type: 'Adventure', image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=800&q=80' },
    { id: 6, name: 'New York, USA', region: 'North America', price: 1500, rating: 4.7, type: 'City', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80' },
    { id: 7, name: 'Maldives', region: 'Asia', price: 2500, rating: 4.9, type: 'Relaxing', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80' },
    { id: 8, name: 'Cape Town, South Africa', region: 'Africa', price: 1300, rating: 4.6, type: 'Cultural', image: 'https://images.unsplash.com/photo-1576485290814-6c133ca796d9?auto=format&fit=crop&w=800&q=80' },
];

const Discover = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('All');

    const filteredDestinations = destinations.filter(dest => {
        const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = selectedType === 'All' || dest.type === selectedType;
        return matchesSearch && matchesType;
    });

    return (
        <div className="container" style={{ padding: 'var(--spacing-xl) var(--spacing-md)' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>Explore Destinations</h1>
                <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                    Find your perfect getaway from our curated list of world-class destinations.
                </p>
            </div>

            {/* Filters */}
            <Card style={{ marginBottom: 'var(--spacing-xl)', display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-md)', alignItems: 'center' }}>
                <div style={{ flex: 1, minWidth: '200px' }}>
                    <Input
                        placeholder="Search destinations..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        icon={<Search size={18} />}
                        style={{ marginBottom: 0 }}
                    />
                </div>
                <div style={{ display: 'flex', gap: 'var(--spacing-sm)', overflowX: 'auto', paddingBottom: '4px' }}>
                    {['All', 'Relaxing', 'Adventure', 'Cultural', 'Romantic', 'City'].map(type => (
                        <Button
                            key={type}
                            size="sm"
                            variant={selectedType === type ? 'primary' : 'outline'}
                            onClick={() => setSelectedType(type)}
                        >
                            {type}
                        </Button>
                    ))}
                </div>
                <Button variant="ghost" size="sm"><Filter size={16} style={{ marginRight: '4px' }} /> More Filters</Button>
            </Card>

            {/* Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--spacing-lg)' }}>
                {filteredDestinations.map(dest => (
                    <Card key={dest.id} padding="none" style={{ overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.2s' }}>
                        <div style={{ height: '180px', backgroundColor: '#ddd' }}>
                            <img src={dest.image} alt={dest.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ padding: 'var(--spacing-md)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                <h3 style={{ fontSize: '1.25rem' }}>{dest.name}</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#F59E0B' }}>
                                    <Star size={14} fill="#F59E0B" />
                                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-main)' }}>{dest.rating}</span>
                                </div>
                            </div>
                            <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', marginBottom: 'var(--spacing-md)' }}>
                                {dest.region} • {dest.type}
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>From ${dest.price}</span>
                                <Button size="sm" variant="outline">Details</Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Discover;
