import { CarProps } from '@/types';
import React from 'react';

interface CarDetailsProps {
  closeModal: () => void;
  isOpen: boolean;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return <div>CarDetails</div>;
};

export default CarDetails;
