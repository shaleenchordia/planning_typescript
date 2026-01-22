import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Plus, Calendar, DollarSign, Map, Sun } from 'lucide-react';

const Dashboard = () => {
    return (
        <div className="container" style={{ padding: 'var(--spacing-xl) var(--spacing-md)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-xl)' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-xs)' }}>Hello, Alex 👋</h1>
                    <p style={{ color: 'var(--color-text-secondary)' }}>Here's what's happening with your trips.</p>
                </div>
                <Button>
                    <Plus size={20} style={{ marginRight: '8px' }} />
                    Plan New Trip
                </Button>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>
                <Card style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                    <div style={{ padding: '12px', borderRadius: '50%', backgroundColor: 'rgba(50, 130, 184, 0.1)', color: 'var(--color-secondary)' }}>
                        <Map size={24} />
                    </div>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>3</div>
                        <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>Upcoming Trips</div>
                    </div>
                </Card>
                <Card style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                    <div style={{ padding: '12px', borderRadius: '50%', backgroundColor: 'rgba(15, 76, 117, 0.1)', color: 'var(--color-primary)' }}>
                        <DollarSign size={24} />
                    </div>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>$4,250</div>
                        <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>Total Budget</div>
                    </div>
                </Card>
                <Card style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                    <div style={{ padding: '12px', borderRadius: '50%', backgroundColor: '#FFF4E5', color: '#FFB74D' }}>
                        <Calendar size={24} />
                    </div>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>12</div>
                        <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>Days Until Next Trip</div>
                    </div>
                </Card>
            </div>

            {/* Upcoming Trips */}
            <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-lg)' }}>Upcoming Trips</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
                {/* Trip Card */}
                <Card padding="none" style={{ display: 'flex', overflow: 'hidden', height: '200px' }}>
                    <div style={{ width: '300px', flexShrink: 0 }}>
                        <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80" alt="Tokyo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: 'var(--spacing-lg)', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-xs)' }}>Tokyo Adventure</h3>
                                <p style={{ color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <Calendar size={16} /> April 10 - April 20, 2026
                                </p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                                    <Sun size={16} /> 18°C Sunny
                                </div>
                                <Button variant="outline" size="sm">Manage</Button>
                            </div>
                        </div>

                        {/* Progress */}
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                                <span>Budget</span>
                                <span>$2,100 / $3,000</span>
                            </div>
                            <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--color-border)', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{ width: '70%', height: '100%', backgroundColor: 'var(--color-secondary)' }}></div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
