import React, { useState } from 'react';
import { Search, Calendar, DollarSign, MapPin } from 'lucide-react';
import Button from './Button';

const SearchBar = () => {
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [budget, setBudget] = useState('');

    return (
        <div style={{
            backgroundColor: 'var(--color-surface)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--spacing-md)',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--spacing-md)',
            alignItems: 'center',
            marginTop: 'var(--spacing-xl)',
            maxWidth: '900px',
            width: '100%'
        }}>
            <div style={{ flex: '1 1 200px', display: 'flex', alignItems: 'center', borderRight: '1px solid var(--color-border)', paddingRight: 'var(--spacing-md)' }}>
                <MapPin size={20} color="var(--color-primary)" style={{ marginRight: 'var(--spacing-sm)' }} />
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '2px' }}>DESTINATION</label>
                    <input
                        type="text"
                        placeholder="Where do you want to go?"
                        style={{ border: 'none', outline: 'none', fontSize: '1rem', width: '100%' }}
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                    />
                </div>
            </div>

            <div style={{ flex: '1 1 150px', display: 'flex', alignItems: 'center', borderRight: '1px solid var(--color-border)', paddingRight: 'var(--spacing-md)' }}>
                <Calendar size={20} color="var(--color-primary)" style={{ marginRight: 'var(--spacing-sm)' }} />
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '2px' }}>DATES</label>
                    <input
                        type="text"
                        placeholder="Add dates"
                        onFocus={(e) => (e.target.type = 'date')}
                        onBlur={(e) => (e.target.type = 'text')}
                        style={{ border: 'none', outline: 'none', fontSize: '1rem', width: '100%' }}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
            </div>

            <div style={{ flex: '1 1 150px', display: 'flex', alignItems: 'center', paddingRight: 'var(--spacing-md)' }}>
                <DollarSign size={20} color="var(--color-primary)" style={{ marginRight: 'var(--spacing-sm)' }} />
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '2px' }}>BUDGET</label>
                    <input
                        type="number"
                        placeholder="$500 - $5000"
                        style={{ border: 'none', outline: 'none', fontSize: '1rem', width: '100%' }}
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                    />
                </div>
            </div>

            <Button size="lg" style={{ borderRadius: 'var(--radius-md)' }}>
                <Search size={20} style={{ marginRight: '8px' }} />
                Search
            </Button>
        </div>
    );
};

export default SearchBar;
