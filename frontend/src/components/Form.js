import React from "react";

export default function Form({ button, eventKeyboard, register, obj }) {
  return (
    <div>
      <form>
        <input type="text" value={obj.name}  onChange={eventKeyboard} name="name" placeholder="Produto" className="form-control" />
        <input type="text" value={obj.brand} onChange={eventKeyboard} name="brand" placeholder="Marca" className="form-control" />

        {button ? (
          <input type="button" value="Register" onClick={register} className="btn btn-primary" />
        ) : (
          <div>
            <input type="button" value="Update" className="btn btn-warning" />
            <input type="button" value="Remove" className="btn btn-danger" />
            <input type="button" value="Cancel" className="btn btn-secondary" />
          </div>
        )}
      </form>
    </div>
  );
}
