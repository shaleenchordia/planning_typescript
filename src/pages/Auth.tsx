import React, { useState } from 'react';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import { Mail, Lock, User } from 'lucide-react';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div style={{
            minHeight: 'calc(100vh - var(--header-height) - 300px)', // Adjust height
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--color-bg)',
            padding: 'var(--spacing-xl)'
        }}>
            <Card style={{ width: '100%', maxWidth: '400px' }} padding="lg">
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)' }}>
                        {isLogin ? 'Welcome Back' : 'Create Account'}
                    </h2>
                    <p style={{ color: 'var(--color-text-secondary)' }}>
                        {isLogin ? 'Sign in to access your trips' : 'Join us to start planning'}
                    </p>
                </div>

                <form onSubmit={(e) => e.preventDefault()}>
                    {!isLogin && (
                        <Input
                            label="Full Name"
                            placeholder="John Doe"
                            type="text"
                            icon={<User size={18} />}
                        />
                    )}
                    <Input
                        label="Email Address"
                        placeholder="you@example.com"
                        type="email"
                        icon={<Mail size={18} />}
                    />
                    <Input
                        label="Password"
                        placeholder="••••••••"
                        type="password"
                        icon={<Lock size={18} />}
                    />

                    <Button type="submit" style={{ width: '100%', marginTop: 'var(--spacing-md)' }}>
                        {isLogin ? 'Sign In' : 'Sign Up'}
                    </Button>
                </form>

                <div style={{ marginTop: 'var(--spacing-lg)', textAlign: 'center', fontSize: '0.875rem' }}>
                    <span style={{ color: 'var(--color-text-secondary)' }}>
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                    </span>
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--color-primary)',
                            fontWeight: 600,
                            cursor: 'pointer',
                            textDecoration: 'underline'
                        }}
                    >
                        {isLogin ? 'Sign Up' : 'Sign In'}
                    </button>
                </div>
            </Card>
        </div>
    );
};

export default Auth;
