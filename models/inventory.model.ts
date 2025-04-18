export interface IAvailableInventory {
  inventory_Id: number;
  purchaseDate?: string;
  purchaseFrom?: string;
  locationFrom?: string;
  soldTo?: string;
  soldBy?: string;
  isRegistration?: boolean;
  notes?: string;
  saleDate?: string;
  vin?: string;
  color?: string;
  iYear?: number;
  vehicleMake_Id?: number;
  vehicleMake_Name?: string;
  vehicleModel_Id?: number;
  vehicleModel_Name?: string;
  status?: string;
  originalCost?: number;
  floor_Cost?: number;
  addedCost?: number;
  salePrice?: number;
  salePriceCash?: number;
  salePriceWire?: number;
  salePriceCheque?: number;
  salePriceDescription?: string;
  typeOfSale?: string;
  isPaid?: string;
  bank_id?: number;
  buyer?: string;
  title?: string;
  purchaseFromId?: number;
  buyerId?: number;
  soldById?: number;
  dealer_Fee?: number;
  lot_Id?: null;
  isOnline?: boolean;
  isInspection?: boolean;
  isWholeSale?: boolean;
  isRepairShop?: boolean;
  announcement?: string;
  battery?: string;
  checkEngineLight?: string;
  ac?: string;
  windows?: string;
  tireLight?: string;
  radio?: string;
  sunroof?: string;
  windsheild?: string;
  upholstrey?: string;
  cleanliness?: string;
  anyLights?: string;
  amythingMike?: null;
  others?: string;
  keyNo?: string;
  bodyWork?: string;
  vehicleDetails?: string;
  purchaseDetails?: string;
  availableCostDetails?: string | number;
  soldCostDetails?: string | number;
  saleDetails?: string;
  days?: number;
  isPaymentDone?: boolean;
  firstPaymentDueDate?: Date;
  isPaymentReceived?: boolean;
  onlineDate?: Date;
  onlineDays?: string;
  onlineCost?: number;
  reducedCost?: number;
  customerName?: string;
  customerPhoneNumber?: string | number;
  titleRegisterationFee?: boolean | string | number;
  documentFee?: boolean | string | number;
  saleTax?: boolean | string | number;
}

export interface ISoldInventory {
  inventory_Id: number;
  purchaseDate: string;
  purchaseFrom: string;
  locationFrom: string;
  soldTo: string;
  soldBy: string;
  isRegistration: boolean;
  notes: string;
  saleDate: string;
  vin: string;
  color: string;
  iYear: number;
  vehicleMake_Id: number;
  vehicleMake_Name: string;
  vehicleModel_Id: number;
  vehicleModel_Name: string;
  status: string;
  originalCost: number;
  floor_Cost: number;
  addedCost: number;
  salePrice: number;
  salePriceCash: number;
  salePriceWire: number;
  salePriceCheque: number;
  salePriceDescription: string;
  typeOfSale: string;
  isPaid: string;
  buyer: string;
  title: string;
  purchaseFromId: number;
  buyerId: number;
  soldById: number;
  dealer_Fee: number;
  isOnline: boolean;
  isInspection: boolean;
  isWholeSale: boolean;
  isRepairShop: boolean;
  announcement: string;
  battery: string;
  checkEngineLight: string;
  ac: string;
  windows: string;
  tireLight: string;
  radio: string;
  sunroof: string;
  windsheild: string;
  upholstrey: string;
  cleanliness: string;
  anyLights: string;
  amythingMike: string;
  others: string;
  keyNo: string;
  bodyWork: string;
  vehicleDetails: string;
  purchaseDetails: string;
  availableCostDetails: string;
  soldCostDetails: string;
  saleDetails: string;
  days: number;
  onlineDate: string;
  onlineDays: string;
  onlineCost: number;
  reducedCost: number;
  customerName: string;
  customerPhoneNumber: string;
  titleRegisterationFee: number;
  documentFee: number;
  saleTax: number;
}
