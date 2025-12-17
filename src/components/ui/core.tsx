import styled from 'styled-components';
import { motion } from 'motion/react';

export const Button = styled(motion.button).attrs<{ variant?: 'primary' | 'secondary' | 'outline', fullWidth?: boolean }>(props => ({
  className: `
    inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-sm
    ${props.variant === 'primary' ? 'bg-[#121212] text-white hover:bg-[#C9A86A] hover:text-[#121212] border border-transparent' : ''}
    ${props.variant === 'secondary' ? 'bg-[#F5F5F2] text-[#121212] hover:bg-[#E7DFC8] border border-transparent' : ''}
    ${props.variant === 'outline' ? 'border border-[#121212] text-[#121212] hover:bg-[#121212] hover:text-white' : ''}
    ${props.fullWidth ? 'w-full' : ''}
    ${!props.variant ? 'bg-[#121212] text-white hover:bg-[#C9A86A] hover:text-[#121212]' : ''}
  `
}))``;

export const Input = styled.input.attrs({
  className: 'flex h-12 w-full border border-gray-200 bg-white px-4 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#C9A86A] focus:ring-1 focus:ring-[#C9A86A] disabled:cursor-not-allowed disabled:opacity-50 transition-colors rounded-sm text-[#121212]'
})``;

export const Label = styled.label.attrs({
  className: 'text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block'
})``;
