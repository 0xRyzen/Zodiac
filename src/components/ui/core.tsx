
import styled from 'styled-components';
import { motion } from 'motion/react';

export const Button = styled(motion.button).attrs<{ variant?: 'primary' | 'secondary' | 'outline', fullWidth?: boolean }>(props => ({
  className: `
    inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none
    ${props.variant === 'primary' ? 'bg-[#2D2D2D] text-white hover:bg-[#404040]' : ''}
    ${props.variant === 'secondary' ? 'bg-[#F5F5F0] text-[#2D2D2D] hover:bg-[#EAEAE5]' : ''}
    ${props.variant === 'outline' ? 'border border-[#2D2D2D] text-[#2D2D2D] hover:bg-[#F5F5F0]' : ''}
    ${props.fullWidth ? 'w-full' : ''}
    ${!props.variant ? 'bg-[#2D2D2D] text-white hover:bg-[#404040]' : ''}
  `
}))`
  border-radius: 4px;
`;

export const Input = styled.input.attrs({
  className: 'flex h-12 w-full border border-[#E5E5E5] bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#2D2D2D] disabled:cursor-not-allowed disabled:opacity-50'
})`
  border-radius: 4px;
`;

export const Label = styled.label.attrs({
  className: 'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2 block'
})``;
