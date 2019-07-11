import React, { Component } from 'react';

class CategoryRow extends Component {
    render() {
        return (
            <tr role="row" className="odd">
                    <th scope="row" className="sorting_1">{this.props.id}</th>
                    <td>{this.props.categoryName}</td>
                    <td>{this.props.description}</td>
                    <td>
                      <a className="text-primary" data-toggle="modal" data-target={"#edit-"+this.props.id}>
                        <i className="fa fa-edit" />
                      </a>
                      <div aria-hidden="true" aria-labelledby="exampleModalLabel" className="modal fade" role="dialog" tabIndex={-1} id={"edit-"+this.props.id}>
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLabel"> Edit category</h5>
                              <button aria-label="Close" className="close" data-dismiss="modal" type="button">
                                <span aria-hidden="true">×</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <form action="/admin/categories" method="post">
                                <input name="id" defaultValue={this.props.id} type="hidden" />
                                <div className="form-group">
                                  <input className="form-control" placeholder="category name" defaultValue={this.props.categoryName} type="text" name="categoryName" />
                                </div>
                                <div className="form-group">
                                  <input className="form-control" placeholder="description" defaultValue={this.props.description} type="text" name="description" />
                                </div>
                                <div className="modal-footer">
                                  <button className="btn btn-secondary" data-dismiss="modal" type="button">Close
                                  </button>
                                  <button className="btn btn-primary" type="submit">Save
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Button trigger delete */}
                      <a className="text-danger" data- data-toggle="modal" data-target={"#popup-"+this.props.id}>
                        <i className="fa fa-trash" />
                      </a>
                      {/* Modal */}
                      <div aria-hidden="true" aria-labelledby="exampleModalLabel1" className="modal fade" role="dialog" tabIndex={-1} id={"popup-"+this.props.id}>
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLabel1">Warning !!!</h5>
                              <button aria-label="Close" className="close" data-dismiss="modal" type="button">
                                <span aria-hidden="true">×</span>
                              </button>
                            </div>
                            <div className="modal-body">Do you want delete {this.props.categoryName} ?</div>
                            <div className="modal-footer">
                              <button className="btn btn-secondary" data-dismiss="modal" type="button">No
                              </button>
                              <a className="btn btn-primary" onClick ={()=>this.props.delete()}>Yes</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
        );
    }
}

export default CategoryRow;