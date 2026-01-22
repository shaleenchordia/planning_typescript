import React, { useState } from 'react';
import Button from '../components/Button';
import ItineraryItem from '../components/ItineraryItem';
import { Map, Share2, Download, Plus } from 'lucide-react';

const Planner = () => {
    const [selectedDay, setSelectedDay] = useState(1);
    const days = [1, 2, 3, 4, 5];

    const itinerary = [
        { id: 1, time: '09:00', title: 'Breakfast at Cafe de Flore', category: 'Food', price: '$25', day: 1, image: 'https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&w=100&q=80' },
        { id: 2, time: '10:30', title: 'Louvre Museum Tour', category: 'Activity', price: '$45', day: 1, image: 'https://images.unsplash.com/photo-1499856871940-a09627c6dcf6?auto=format&fit=crop&w=100&q=80' },
        { id: 3, time: '13:00', title: 'Lunch at Tuileries Garden', category: 'Food', price: '$30', day: 1, image: 'https://images.unsplash.com/photo-1565895405139-e188df996e0b?auto=format&fit=crop&w=100&q=80' },
        { id: 4, time: '15:00', title: 'Seine River Cruise', category: 'Activity', price: '$20', day: 1, image: 'https://images.unsplash.com/photo-1549271644-8395ae511993?auto=format&fit=crop&w=100&q=80' },
        { id: 5, time: '10:00', title: 'Eiffel Tower Visit', category: 'Activity', price: '$55', day: 2, image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce7859?auto=format&fit=crop&w=100&q=80' },
    ];

    const currentItems = itinerary.filter(item => item.day === selectedDay);

    return (
        <div style={{ display: 'flex', height: 'calc(100vh - var(--header-height))' }}>
            {/* Sidebar / Itinerary Panel */}
            <div style={{ width: '40%', minWidth: '400px', borderRight: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-bg)' }}>
                {/* Header */}
                <div style={{ padding: 'var(--spacing-lg)', borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
                    <h1 style={{ fontSize: '1.5rem', marginBottom: '4px' }}>Paris Getaway</h1>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>April 10 - April 15 • 2 Travelers</p>

                    <div style={{ display: 'flex', gap: 'var(--spacing-sm)', marginTop: 'var(--spacing-md)' }}>
                        <Button size="sm" variant="outline"><Share2 size={16} style={{ marginRight: '4px' }} /> Share</Button>
                        <Button size="sm" variant="outline"><Download size={16} style={{ marginRight: '4px' }} /> PDF</Button>
                    </div>
                </div>

                {/* Days Scroll */}
                <div style={{ display: 'flex', gap: 'var(--spacing-sm)', padding: 'var(--spacing-md)', overflowX: 'auto', borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
                    {days.map(day => (
                        <button
                            key={day}
                            onClick={() => setSelectedDay(day)}
                            style={{
                                padding: '8px 16px',
                                borderRadius: '20px',
                                border: selectedDay === day ? 'none' : '1px solid var(--color-border)',
                                backgroundColor: selectedDay === day ? 'var(--color-primary)' : 'transparent',
                                color: selectedDay === day ? 'white' : 'var(--color-text-secondary)',
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                                fontWeight: 500
                            }}
                        >
                            Day {day}
                        </button>
                    ))}
                    <button style={{ padding: '8px', borderRadius: '50%', border: '1px solid var(--color-border)', backgroundColor: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Plus size={16} color="var(--color-text-secondary)" />
                    </button>
                </div>

                {/* List */}
                <div style={{ flex: 1, overflowY: 'auto', padding: 'var(--spacing-md)' }}>
                    {currentItems.length > 0 ? (
                        currentItems.map(item => (
                            <ItineraryItem
                                key={item.id}
                                time={item.time}
                                title={item.title}
                                category={item.category}
                                price={item.price}
                                image={item.image}
                            />
                        ))
                    ) : (
                        <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--color-text-secondary)' }}>
                            No activities planned for this day. <br /> Use the map to explore!
                        </div>
                    )}
                    <Button variant="ghost" style={{ width: '100%', border: '1px dashed var(--color-border)', marginTop: 'var(--spacing-md)' }}>
                        <Plus size={16} style={{ marginRight: '8px' }} /> Add Activity
                    </Button>
                </div>
            </div>

            {/* Map Placeholder */}
            <div style={{ flex: 1, backgroundColor: '#e5e5e5', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(#ccd1d9 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.5 }}></div>
                <div style={{ textAlign: 'center', color: 'var(--color-text-secondary)' }}>
                    <Map size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                    <p style={{ fontWeight: 500, fontSize: '1.25rem' }}>Interactive Map View</p>
                    <p style={{ fontSize: '0.875rem' }}>Visualizing itinerary for Day {selectedDay}</p>
                </div>
            </div>
        </div>
    );
};

export default Planner;
