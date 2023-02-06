import React from "react";
import "./ItemsTable.scss";

function ItemsTable<ItemType>(props: {
  items: Array<ItemType | any>;
  fields: Array<string>;
  fieldNames: Array<string>;
  imagePathPrefix: string;
  imageExtension: string;
}) {
  const getRowFromItem = (item: ItemType | any) => {
    return props.fields.map((field) => {
      return <td>{item[field]}</td>;
    });
  };

  const getFieldNames = () => {
    return props.fieldNames.map((fieldName) => {
      return <td>{fieldName}</td>;
    });
  };

  const getItemsData = () => {
    return props.items.map((item) => {
      return (
        <tr className="items-table__item">
          <td>
            <img
              className="items-table__image"
              src={
                props.imagePathPrefix +
                item["name"].trim().toLocaleLowerCase().replace(" ", "_") +
                props.imageExtension
              }
              alt={item.name}
            />
          </td>
          {getRowFromItem(item)}
        </tr>
      );
    });
  };

  return (
    <div className="items-table">
      <table
        className="items-table__table"
        cellPadding={props.fields.length + 1}
      >
        <thead className="items-table__head">
          <tr>
            <td></td>
            {getFieldNames()}
          </tr>
        </thead>
        <tbody>{getItemsData()}</tbody>
      </table>
    </div>
  );
}
export default ItemsTable;
