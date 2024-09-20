import { ShipmentType } from "../types/shipment.types";
import { client } from "./axios.config";

export const fetchShipmentListStatus = async (): Promise<ShipmentType[]> => {
    try {
        const res: { message: ShipmentType[] } = await client.get("/frappe.client.get_list");
        return res.message;
    } catch (error) {
        throw error;
    }
};

export const fetchShipmentList = async (): Promise<any> => {
    try {
        const res = await client.get("/frappe.client.get_list");
        return res;
    } catch (error) {
        throw error;
    }
};
