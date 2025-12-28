
import React from 'react';
import { NavItem, Project, Testimonial } from './types';

export const COLORS = {
  pink: '#ed87ae',
  teal: '#60cad1',
  yellow: '#fedb88',
  dark: '#2d2d2d',
};

export const LOGO_URL = "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766943075819_Alicia_Zurita__1_.png?alt=media&token=208c7028-e654-4ed3-91bd-4049f7ee27ea";

export const HEADER_LOGO_URL = "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766943159665_Alicia_Zurita.png?alt=media&token=0ce563e4-6928-4013-8d09-834461a64822";

export const NAV_ITEMS: NavItem[] = [
  { label: 'SOBRE MI', href: '#sobre-mi' },
  { label: 'DESPERTAR ESTRATEGICO', href: '#despertar' },
  { label: 'PROYECTOS', href: '#proyectos' },
  { label: 'SERVICIOS', href: '#servicios' },
  { label: 'MENTORIA', href: '#mentoria' },
  { label: 'CONTENIDO', href: '#contenido' },
  { label: 'CONTACTO', href: '#contacto' },
];

export const PROJECTS: string[] = ['LUBETS', 'AUTÉNTICAS', 'UNTIMERS', 'MÓNICA FUSTÉ'];

export const TESTIMONIALS: Testimonial[] = [
  {
    author: 'Mónica Fusté',
    quote: 'Alicia no solo actualizó mi concepto: lo alineó con mi evolución. Ordenó mis ideas, les dio forma y convirtió mi esencia en un mensaje claro y potente. Ahora todo encaja... y tiene dirección.'
  },
  {
    author: 'Joni',
    company: 'Untimers',
    quote: 'Trabajar con Alicia fue lo que convirtió años de ideas sueltas en una marca con alma. Entendió desde el minuto uno qué significaba para mí la relojería y cómo traducirlo en un concepto coherente.'
  },
  {
    author: 'Marta Muñoz',
    quote: 'Con Alicia entendí que el secreto está en la esencia: quién eres, qué sientes y cómo lo llevas a tu proyecto. Tiene un don para ver caminos y dibujar estrategias con una precisión que sorprende.'
  }
];

export const PRESS_LOGOS = [
  'ABC', 'EL PAÍS', 'EL MUNDO', 'RTVE', 'COSMOPOLITAN', 'WOMAN', 'ELLE', 'LA RAZON', 'INFOBAE', 'MARIE CLAIRE', 'EMPRENDEDORES'
];
