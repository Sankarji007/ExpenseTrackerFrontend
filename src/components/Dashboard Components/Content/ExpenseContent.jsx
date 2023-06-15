import React from 'react';

const ExpenseContent = () => {
    const formStyle = {
        padding: "20px",
        marginTop: "20px",
        border: "1px solid #ced4da",
        borderRadius: "4px"
    };

    return (
        <div className="container">
            <form className="row justify-content-center" style={formStyle}>
                <div className="col-12 col-md-3 form-group mt-3">
                    <label htmlFor="expenseName">Expense Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="expenseName"
                        required
                    />
                </div>

                <div className="col-12 col-md-3 form-group mt-3">
                    <label htmlFor="expensePrice">Price:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="expensePrice"
                        required
                    />
                </div>
                <div className="col-12 col-md-3 form-group mt-3">
                    <label htmlFor="expenseDate">Date:</label>
                    <input
                        type="date"
                        className="form-control"
                        id="expenseDate"
                    />
                </div>
                <div id="select-input" className="col-12 col-md-3 form-group mt-3">
                    <label htmlFor="expenseType">Expense Type:</label>
                    <select
                        className="form-control"
                        id="expenseType"
                        required
                    >
                        <option value="">Select Type</option>
                        <option value="Food">Food</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Utilities">Utilities</option>
                    </select>

                    <label for="popup-checkbox">
                     <i class="fa">&#xf013;</i>
                    </label>
                    <input type="checkbox" id="popup-checkbox" />
                    <div class="popup">
                      <span class="close-icon"><i class="fa">&#xf00d;</i></span>
                        This is the content of the pop-up.
                    </div>
                </div>

                <div className="col-12 mt-3">
                    <button type="submit" className="btn btn-primary">
                        Add
                    </button>
                </div>
            </form>
            <div className="mt-5">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th style={{fontWeight: 'bold', fontSize: '1.5rem'}}>Expense Name</th>
                        <th style={{fontWeight: 'bold', fontSize: '1.5rem'}}>Expense Price</th>
                        <th style={{fontWeight: 'bold', fontSize: '1.5rem'}}>Expense Date</th>
                        <th style={{fontWeight: 'bold', fontSize: '1.5rem'}}>Expense Type</th>
                        <th style={{fontWeight: 'bold', fontSize: '1.5rem'}}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Iphone</td>
                        <td>$2000</td>
                        <td>12/09/2023</td>
                        <td>Waste of money</td>
                        <td>
                            <button
                                className="btn btn-danger btn-sm me-2"
                            >
                                <i className="fa fa-trash"></i>
                            </button>
                            <button className="btn btn-primary btn-sm">
                                <i className="fa fa-pencil"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Iphone</td>
                        <td>$2000</td>
                        <td>12/09/2023</td>
                        <td>Waste of money</td>
                        <td>
                            <button
                                className="btn btn-danger btn-sm me-2"
                            >
                                <i className="fa fa-trash"></i>
                            </button>
                            <button className="btn btn-primary btn-sm">
                                <i className="fa fa-pencil"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Iphone</td>
                        <td>$2000</td>
                        <td>12/09/2023</td>
                        <td>Waste of money</td>
                        <td>
                            <button
                                className="btn btn-danger btn-sm me-2"
                            >
                                <i className="fa fa-trash"></i>
                            </button>
                            <button className="btn btn-primary btn-sm">
                                <i className="fa fa-pencil"></i>
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default ExpenseContent;

