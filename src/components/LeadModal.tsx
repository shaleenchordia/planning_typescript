import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const LeadModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        destination: '',
        budget: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    useEffect(() => {
        // slight delay to show animation
        const timer = setTimeout(() => setIsOpen(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('http://localhost:3001/api/leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setTimeout(() => setIsOpen(false), 2000); // Close after success
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            opacity: isOpen ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
        }}>
            <div style={{
                backgroundColor: 'var(--color-surface, #fff)',
                padding: '2rem',
                borderRadius: '1rem',
                width: '90%',
                maxWidth: '500px',
                position: 'relative',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
            }}>
                <button
                    onClick={() => setIsOpen(false)}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'var(--color-text-secondary)'
                    }}
                >
                    <X size={24} />
                </button>

                <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)', textAlign: 'center' }}>Plan Your Dream Trip</h2>

                {status === 'success' ? (
                    <div style={{ textAlign: 'center', padding: '2rem 0', color: 'green' }}>
                        <h3>Thank you!</h3>
                        <p>We have saved your preferences.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #ccc' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #ccc' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Dream Destination</label>
                            <input
                                type="text"
                                value={formData.destination}
                                onChange={e => setFormData({ ...formData, destination: e.target.value })}
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #ccc' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Estimated Budget</label>
                            <select
                                value={formData.budget}
                                onChange={e => setFormData({ ...formData, budget: e.target.value })}
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #ccc' }}
                            >
                                <option value="">Select a range</option>
                                <option value="$1k - $3k">$1k - $3k</option>
                                <option value="$3k - $5k">$3k - $5k</option>
                                <option value="$5k - $10k">$5k - $10k</option>
                                <option value="$10k+">$10k+</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            style={{
                                marginTop: '1rem',
                                padding: '1rem',
                                backgroundColor: 'var(--color-primary, #007bff)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '0.5rem',
                                fontSize: '1rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                opacity: status === 'submitting' ? 0.7 : 1
                            }}
                        >
                            {status === 'submitting' ? 'Saving...' : 'Start Planning'}
                        </button>
                        {status === 'error' && <p style={{ color: 'red', textAlign: 'center' }}>Something went wrong. Please try again.</p>}
                    </form>
                )}
            </div>
        </div>
    );
};

export default LeadModal;
