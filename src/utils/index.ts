export const totalConnectorMessages = (rowIndex:number) => {
    const arr = [
      'available',
      'unavailable',
      'occupied',
      'faulted'
    ];
    
    return arr.find((_:any, index:number) => rowIndex === index);
 };