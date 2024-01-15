import { CarProps } from '@/types';

export async function fetchCars() {
  const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fa699073f0msh2b4850b8c2c4189p1b1e02jsn7e3e29aa0333',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = async (car: CarProps, angle?: string) => {
  const url = new URL('http://cdn.imagin.studio/getimage');
  const {} = car;
  url.searchParams.append('customer', '');
  // url.searchParams.append('make', model.split(' '))
  return url.toString();
};
