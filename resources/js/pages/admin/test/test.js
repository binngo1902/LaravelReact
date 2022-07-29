import React, { useState, useEffect } from "react";
import TableContainer from "../../../components/datatable";

import "../../../components/style.css";
import { API_LIST_USERS } from "../../../constant/endpoint";
import Table from "./table";

function Test(props) {
    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header" id="formSearch">
                        <div class="filter">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-group" for="inputSearch">社員ID / 社員ユーザーID/ Zoom アカウント ID/ メールアドレス</label>
                                        <input type="text" class="form-control" placeholder="" name="keyword"
                                            id="inputSearch" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="icheck-primary">
                                        <input type="checkbox" id="checkViewMainAccount"/>
                                        <label for="checkViewMainAccount">
                                            主アカウントのみ表示
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="icheck-primary">
                                        <input type="checkbox" id="checkViewLicensedAccount"/>
                                        <label for="checkViewLicensedAccount">
                                            ライセンスがあるアカウントのみ表示
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md-1">
                                    <div class="form-group">
                                        <button class="btn btn-primary btn-block bg-button text-nowrap px-md-1"
                                            id="searchZoomAccount">検索</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="card-body">
                            <TableContainer
                                baseUrl={API_LIST_USERS}
                                params="search_key"
                            >
                                <Table
                                />
                            </TableContainer>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Test;
