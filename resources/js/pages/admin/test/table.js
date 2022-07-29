import React from "react";
import THSort from "../../../components/datatable/THSort";

export default function Table(props) {
    return (
        <div className="table-responsive">
            <table className="table table-bordered table-striped datatable">
                <thead>
                    <tr>
                        <THSort
                            className="text-center"
                            name="id"
                            {...props.sort}
                        >
                           ID
                        </THSort>
                        <THSort
                            className="text-center"
                            name="account"
                            {...props.sort}
                        >
                            Account
                        </THSort>
                        <THSort
                            className="text-center"
                            name="Email"
                            {...props.sort}
                        >
                            Email
                        </THSort>
                    </tr>
                </thead>
                <tbody>
                    {props.dataSource &&
                        props.dataSource.map((item) => (
                            <tr key={item.id} className={item.highlighting}>
                                <td className="text-center" width="7%">
                                    {item.id}
                                </td>
                                <td className="" width="20%">{item.account || ""}</td>
                                <td className="" width="20%">{item.email || ""}</td>
                            </tr>
                        ))}
                    {_.isEmpty(props.dataSource) && (
                        <tr className="text-center">
                            <td className="text-center" colSpan={7}>
                                No Result
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
