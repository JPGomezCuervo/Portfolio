function calculateOffset(height: number): number {
    // Puntos de referencia
    const point1 = { x: 1080, y: 928 };
    const point2 = { x: 720, y: 661 };
  
    // Calcula la pendiente (m)
    const m = (point2.y - point1.y) / (point2.x - point1.x);
  
    // Calcula la intersección (b)
    const b = point1.y - m * point1.x;
  
    // Calcula el offset usando la ecuación de la recta
    const offset = m * height + b;
  
    return offset;
  }

  export default calculateOffset;