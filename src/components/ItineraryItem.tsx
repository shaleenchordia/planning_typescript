import React from 'react';
import Card from './Card';
import { DollarSign, GripVertical, MoreVertical } from 'lucide-react';

interface ItineraryItemProps {
    time: string;
    title: string;
    category: string;
    price: string;
    image?: string;
    onDragStart?: (e: React.DragEvent) => void;
}

const ItineraryItem: React.FC<ItineraryItemProps> = ({ time, title, category, price, image, onDragStart }) => {
    return (
        <Card
            padding="none"
            style={{
                display: 'flex',
                marginBottom: 'var(--spacing-sm)',
                cursor: 'grab',
                alignItems: 'center',
                overflow: 'hidden'
            }}
            draggable={true}
            onDragStart={onDragStart}
        >
            <div style={{ padding: 'var(--spacing-sm)', color: 'var(--color-text-secondary)', cursor: 'grab', alignSelf: 'stretch', display: 'flex', alignItems: 'center' }}>
                <GripVertical size={20} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '50px', borderRight: '1px solid var(--color-border)', padding: 'var(--spacing-sm)' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>{time}</span>
            </div>

            {image && (
                <div style={{ width: '60px', height: '60px', flexShrink: 0 }}>
                    <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            )}

            <div style={{ flex: 1, padding: 'var(--spacing-sm)' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-primary)', fontWeight: 600 }}>{category}</div>
                <div style={{ fontWeight: 600 }}>{title}</div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', paddingRight: 'var(--spacing-md)' }}>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: '2px' }}>
                    <DollarSign size={14} /> {price}
                </div>
                <MoreVertical size={16} color="var(--color-text-secondary)" style={{ cursor: 'pointer' }} />
            </div>
        </Card>
    );
};

export default ItineraryItem;
