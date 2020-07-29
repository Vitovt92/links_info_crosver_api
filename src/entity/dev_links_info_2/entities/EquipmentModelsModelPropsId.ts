import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("equipment_models__model_props_id", { schema: "dev_links_info_2" })
export class EquipmentModelsModelPropsId {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "equipment_model_id", nullable: true })
  equipmentModelId: number | null;

  @Column("int", { name: "model-prop_id", nullable: true })
  modelPropId: number | null;
}
