"use client";
import { useState } from "react";

export default function SQLGenerator() {
  const [companyData, setCompanyData] = useState([
    {
      CompanyNameAr: "",
      CompanyNameEn: "",
      CompanyTypeID: 1,
      CommercialRegisterNumber: "",
      ActiveDirectoryAccountID: "",
      IsActive: 1,
      Address: "",
      PoBox: "",
      Tel: "",
      Email: "",
      ZipCode: "",
    },
  ]);

  const [employeeData, setEmployeeData] = useState([
    {
      UserName: "",
      AccountNameAr: "",
      AccountNameEn: "",
      Email: "",
      Position: "",
      Mobile: "",
      CompanyID: "",
      IsRepresentative: 1,
      IsManager: 0,
    },
  ]);

  const [sqlScript, setSqlScript] = useState("");
  const [scriptType, setScriptType] = useState("both"); // "companies", "employees", "both"

  const handleCompanyChange = (index, e) => {
    const { name, value } = e.target;
    const updatedCompanyData = [...companyData];
    updatedCompanyData[index][name] = value;
    setCompanyData(updatedCompanyData);
  };

  const handleEmployeeChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEmployeeData = [...employeeData];
    updatedEmployeeData[index][name] = value;
    setEmployeeData(updatedEmployeeData);
  };

  const handleAddCompany = () => {
    setCompanyData([
      ...companyData,
      {
        CompanyNameAr: "",
        CompanyNameEn: "",
        CompanyTypeID: 1,
        CommercialRegisterNumber: "",
        ActiveDirectoryAccountID: "",
        IsActive: 1,
        Address: "",
        PoBox: "",
        Tel: "",
        Email: "",
        ZipCode: "",
      },
    ]);
  };

  const handleRemoveCompany = (index) => {
    if (companyData.length > 1) {
      const updatedCompanyData = companyData.filter((_, i) => i !== index);
      setCompanyData(updatedCompanyData);
    }
  };

  const handleAddEmployee = () => {
    setEmployeeData([
      ...employeeData,
      {
        UserName: "",
        AccountNameAr: "",
        AccountNameEn: "",
        Email: "",
        Position: "",
        Mobile: "",
        CompanyID: "",
        IsRepresentative: 1,
        IsManager: 0,
      },
    ]);
  };

  const handleRemoveEmployee = (index) => {
    if (employeeData.length > 1) {
      const updatedEmployeeData = employeeData.filter((_, i) => i !== index);
      setEmployeeData(updatedEmployeeData);
    }
  };

  const escapeString = (str) => {
    if (!str) return "";
    return str.toString().replace(/'/g, "''");
  };

  const generateCompanySQL = () => {
    let sql = "-- Company Insertions\n";
    companyData.forEach((company, index) => {
      // Generate SQL even if fields are empty - they'll be stored as empty strings
      sql += `INSERT INTO decisions.company \n`;
      sql += `  (CompanyNameAr, CompanyNameEn, CompanyTypeID, CommercialRegisterNumber,\n`;
      sql += `   ActiveDirectoryAccountID, IsActive, Address, PoBox, Tel, Email, ZipCode)\n`;
      sql += `VALUES \n`;
      sql += `('${escapeString(company.CompanyNameAr)}',\n`;
      sql += ` '${escapeString(company.CompanyNameEn)}',\n`;
      sql += ` ${company.CompanyTypeID || 1},\n`;
      sql += ` '${escapeString(company.CommercialRegisterNumber)}',\n`;
      sql += ` '${escapeString(company.ActiveDirectoryAccountID)}',\n`;
      sql += ` ${company.IsActive || 1},\n`;
      sql += ` '${escapeString(company.Address)}',\n`;
      sql += ` '${escapeString(company.PoBox)}',\n`;
      sql += ` '${escapeString(company.Tel)}',\n`;
      sql += ` '${escapeString(company.Email)}',\n`;
      sql += ` '${escapeString(company.ZipCode)}');\n\n`;
    });
    return sql;
  };

  const generateEmployeeSQL = () => {
    let sql = "-- Employee Account Insertions\n";
    employeeData.forEach((employee, index) => {
      // Generate SQL even if some fields are empty
      const guid = crypto.randomUUID().toUpperCase();
      const encryptedId = btoa(
        Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15)
      );

      sql += `-- User ${index + 1}: ${employee.AccountNameAr || "غير محدد"}\n`;
      sql += `BEGIN\n`;
      sql += `    DECLARE \n`;
      sql += `        @userName${index + 1} varchar(300) = '${escapeString(
        employee.UserName
      )}',\n`;
      sql += `        @EnglishName${index + 1} varchar(300) = '${escapeString(
        employee.AccountNameEn
      )}',\n`;
      sql += `        @ArabicName${index + 1} varchar(300) = '${escapeString(
        employee.AccountNameAr
      )}',\n`;
      sql += `        @Email${index + 1} varchar(300) = '${escapeString(
        employee.Email
      )}',\n`;
      sql += `        @Position${index + 1} varchar(300) = '${escapeString(
        employee.Position
      )}',\n`;
      sql += `        @Mobile${index + 1} varchar(300) = '${escapeString(
        employee.Mobile
      )}',\n`;
      sql += `        @CompanyID${index + 1} int = ${
        employee.CompanyID || "NULL"
      },\n`;
      sql += `        @id${index + 1} varchar(300) = '${guid}',\n`;
      sql += `        @encryptId${
        index + 1
      } varchar(300) = '${encryptedId}';\n\n`;

      sql += `    INSERT INTO [Decisions].[CompanyAccount]\n`;
      sql += `    ([CompanyID],[AccountNameAr],[AccountNameEn],[Username],[Email],[Mobile],[Position],[IsActive],[IsRepresentative],[IsManager])\n`;
      sql += `    VALUES (@CompanyID${index + 1},@ArabicName${
        index + 1
      },@EnglishName${index + 1},@userName${index + 1},@Email${
        index + 1
      },@Mobile${index + 1},@Position${index + 1},1,${
        employee.IsRepresentative
      },${employee.IsManager});\n\n`;

      sql += `    DECLARE @accountID${index + 1} int;\n`;
      sql += `    SET @accountID${
        index + 1
      } = (SELECT CompanyAccountID FROM [Decisions].[CompanyAccount] WHERE username=@userName${
        index + 1
      } AND [CompanyID]=@CompanyID${index + 1});\n\n`;

      sql += `    INSERT INTO ChangePasswordRequest (UserID,ReqTypeID,CreationDate,ExpirationDate,ReqGuidID,ServiceName,IsUsed,ServiceURL,UserName)\n`;
      sql += `    SELECT CompanyAccountID,92,GETDATE(),DATEADD(DAY,1,GETDATE()),@id${
        index + 1
      },'Extranet',0,'/Extranet/SPLogin.aspx',Username\n`;
      sql += `    FROM Decisions.CompanyAccount WHERE CompanyAccountID = @accountID${
        index + 1
      };\n\n`;

      sql += `    CREATE TABLE #tempTB${
        index + 1
      } (code varchar(250), val varchar(250));\n`;
      sql += `    INSERT INTO #tempTB${
        index + 1
      } (code,val) VALUES (@encryptId${index + 1},@id${index + 1});\n\n`;

      sql += `    INSERT INTO pendingemail\n`;
      sql += `    ([Subject],Body,MailTO,MailCC,MailBCC,FromAddress,importance,Template,TimeSendON,TimeSendNotBefore,CreatedDate)\n`;
      sql += `    SELECT \n`;
      sql += `        'انشاء مستخدم جديد - هيئة الاتصالات والفضاء والتقنية',\n`;
      sql += `        '<p style="text-align: right;font-family:Sakkal Majalla;"><strong> عزيزي '+ a.AccountNameAr +'،<br/> السلام عليكم ورحمة الله وبركاته </strong></p>\n`;
      sql += `        <p style="text-align: right;font-family:Sakkal Majalla;"><strong> لقد تم إنشاء مستخدم جديد : </strong></p>\n`;
      sql += `        <p style="text-align: right;font-family:Sakkal Majalla;"><strong> إسم المستخدم : '+a.username+' </strong></p>\n`;
      sql += `        <p style="text-align: right;font-family:Sakkal Majalla;"><strong>  يرجى الضغط على الرابط التالي لتعيين كلمة المرور أول مرة :<br/>\n`;
      sql += `        <a style="color:#fff;text-decoration: underline;" target="_blank" href="https://spservices.citc.gov.sa/Extranet/ChangePasswordPage.aspx?'+t.code collate SQL_Latin1_General_CP1256_CI_AS +'">اضغط هنا</a><br/>  </strong></p>\n`;
      sql += `        <p style="text-align: right;font-family:Sakkal Majalla;"><strong></strong></p>\n`;
      sql += `        <p style="text-align: right;font-family:Sakkal Majalla;">\n`;
      sql += `        <strong>ويمكنكم الدخول بإسم المستخدم الجديد و كلمة المرور الى موقع الهيئة عن طريق الرابط \n`;
      sql += `        <a style="color:#fff" href="https://spservices.citc.gov.sa/Extranet/SPLogin.aspx" target="_blank">رابط الخدمات الإلكترونية</a><br/><br/>مع التحية و التقدير،،،<br/>\n`;
      sql += `        هيئة الاتصالات والفضاء والتقنية<br/>للتواصل: 0114618200 </strong></p><br>',\n`;
      sql += `        a.email,NULL,@Email${
        index + 1
      },'citceservices@citc.gov.sa','High',23,NULL,NULL,GETDATE()\n`;
      sql += `    FROM [Decisions].[CompanyAccount] a \n`;
      sql += `    INNER JOIN ChangePasswordRequest c ON a.UserName = c.UserName\n`;
      sql += `    INNER JOIN #tempTB${
        index + 1
      } t ON c.ReqGuidID collate SQL_Latin1_General_CP1256_CI_AS = t.val collate SQL_Latin1_General_CP1256_CI_AS\n`;
      sql += `    WHERE a.CompanyAccountID = @accountID${index + 1};\n\n`;

      sql += `    DROP TABLE #tempTB${index + 1};\n`;
      sql += `END\n`;
      sql += `GO\n\n`;
    });
    return sql;
  };

  const generateSQLScript = () => {
    let script = "";

    if (scriptType === "companies" || scriptType === "both") {
      script += generateCompanySQL();
    }

    if (scriptType === "employees" || scriptType === "both") {
      if (script) script += "\n";
      script += generateEmployeeSQL();
    }

    setSqlScript(script);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sqlScript).then(() => {
      alert("تم نسخ السكريبت إلى الحافظة!");
    });
  };

  const clearAllData = () => {
    setCompanyData([
      {
        CompanyNameAr: "",
        CompanyNameEn: "",
        CompanyTypeID: 1,
        CommercialRegisterNumber: "",
        ActiveDirectoryAccountID: "",
        IsActive: 1,
        Address: "",
        PoBox: "",
        Tel: "",
        Email: "",
        ZipCode: "",
      },
    ]);
    setEmployeeData([
      {
        UserName: "",
        AccountNameAr: "",
        AccountNameEn: "",
        Email: "",
        Position: "",
        Mobile: "",
        CompanyID: "",
        IsRepresentative: 1,
        IsManager: 0,
      },
    ]);
    setSqlScript("");
  };

  return (
    <div
      className="max-w-6xl mx-auto p-6 bg-gray-100 min-h-screen"
      style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6 border">
        <div className="text-center mb-8">
          <h1
            className="text-4xl font-bold mb-2 text-blue-900"
            style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
          >
            هيئة الاتصالات والفضاء والتقنية
          </h1>
          <h2
            className="text-2xl font-semibold text-blue-700"
            style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
          >
            نظام الالتزام
          </h2>
          <div className="w-32 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>

        {/* Script Type Selection */}
        <div className="mb-6 p-4 bg-blue-50 rounded-lg border">
          <label
            className="block text-sm font-semibold mb-2 text-gray-800"
            style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
          >
            نوع السكربت:
          </label>
          <select
            value={scriptType}
            onChange={(e) => setScriptType(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-md text-gray-800 bg-white"
            style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
          >
            <option value="both">الشركات والموظفين معاً</option>
            <option value="companies">الشركات فقط</option>
            <option value="employees">الموظفين فقط</option>
          </select>
        </div>

        {/* Company Form Section */}
        {(scriptType === "companies" || scriptType === "both") && (
          <section className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2
                className="text-xl font-semibold text-green-800"
                style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
              >
                إضافة شركات
              </h2>
              <span
                className="text-sm text-gray-700 bg-green-100 px-3 py-1 rounded-full"
                style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
              >
                عدد الشركات: {companyData.length}
              </span>
            </div>
            {companyData.map((company, index) => (
              <div
                className="mb-6 p-4 border-2 border-green-300 rounded-lg bg-green-50"
                key={index}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3
                    className="font-semibold text-green-900"
                    style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
                  >
                    شركة رقم {index + 1}
                  </h3>
                  {companyData.length > 1 && (
                    <button
                      onClick={() => handleRemoveCompany(index)}
                      className="px-3 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
                    >
                      حذف
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="CompanyNameAr"
                    placeholder="اسم الشركة (بالعربية)"
                    value={company.CompanyNameAr}
                    onChange={(e) => handleCompanyChange(index, e)}
                    className="w-full p-3 border-2 border-gray-300 rounded-md text-gray-800 bg-white"
                    style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
                  />
                  <input
                    type="text"
                    name="CompanyNameEn"
                    placeholder="اسم الشركة (بالإنجليزية)"
                    value={company.CompanyNameEn}
                    onChange={(e) => handleCompanyChange(index, e)}
                    className="w-full p-3 border-2 border-gray-300 rounded-md text-gray-800 bg-white"
                    style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
                  />
                  <input
                    type="number"
                    name="CompanyTypeID"
                    placeholder=" نوع الشركة مقدمي الخطات 1"
                    value={company.CompanyTypeID}
                    onChange={(e) => handleCompanyChange(index, e)}
                    className="w-full p-3 border-2 border-gray-300 rounded-md text-gray-800 bg-white"
                    style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
                  />
                  <input
                    type="text"
                    name="CommercialRegisterNumber"
                    placeholder="رقم السجل التجاري starts with 70.."
                    value={company.CommercialRegisterNumber}
                    onChange={(e) => handleCompanyChange(index, e)}
                    className="w-full p-3 border-2 border-gray-300 rounded-md text-gray-800 bg-white"
                    style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
                  />
                  <input
                    type="text"
                    name="ActiveDirectoryAccountID"
                    placeholder="رقم الحساب في الدليل النشط"
                    value={company.ActiveDirectoryAccountID}
                    onChange={(e) => handleCompanyChange(index, e)}
                    className="w-full p-3 border-2 border-gray-300 rounded-md text-gray-800 bg-white"
                    style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
                  />
                  <select
                    name="IsActive"
                    value={company.IsActive}
                    onChange={(e) => handleCompanyChange(index, e)}
                    className="w-full p-3 border-2 border-gray-300 rounded-md text-gray-800 bg-white"
                    style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
                  >
                    <option value={1}>فعّالة</option>
                    <option value={0}>غير فعّالة</option>
                  </select>
                  <input
                    type="text"
                    name="Address"
                    placeholder="عنوان الشركة"
                    value={company.Address}
                    onChange={(e) => handleCompanyChange(index, e)}
                    className="w-full p-3 border-2 border-gray-300 rounded-md text-gray-800 bg-white"
                    style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
                  />
                  <input
                    type="text"
                    name="PoBox"
                    placeholder="ص.ب PoBox LEAVE EMPTY"
                    value={company.PoBox}
                    onChange={(e) => handleCompanyChange(index, e)}
                    className="w-full p-3 border-2 border-gray-300 rounded-md text-gray-800 bg-white"
                    style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
                  />
                  <input
                    type="text"
                    name="Tel"
                    placeholder="رقم الهاتف"
                    value={company.Tel}
                    onChange={(e) => handleCompanyChange(index, e)}
                    className="w-full p-3 border-2 border-gray-300 rounded-md text-gray-800 bg-white"
                    style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
                  />
                  <input
                    type="email"
                    name="Email"
                    placeholder="البريد الإلكتروني"
                    value={company.Email}
                    onChange={(e) => handleCompanyChange(index, e)}
                    className="w-full p-3 border-2 border-gray-300 rounded-md text-gray-800 bg-white"
                    style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
                  />
                  <input
                    type="text"
                    name="ZipCode"
                    placeholder="الرمز البريدي"
                    value={company.ZipCode}
                    onChange={(e) => handleCompanyChange(index, e)}
                    className="w-full p-3 border-2 border-gray-300 rounded-md text-gray-800 bg-white"
                    style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
                  />
                </div>
              </div>
            ))}
            <button
              onClick={handleAddCompany}
              className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 font-semibold shadow-lg"
              style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
            >
              إضافة شركة جديدة
            </button>
          </section>
        )}

        {/* Employee Form Section */}
        {(scriptType === "employees" || scriptType === "both") && (
          <section className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2
                className="text-xl font-semibold text-blue-800"
                style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
              >
                إضافة موظفين
              </h2>
              <span
                className="text-sm text-gray-700 bg-blue-100 px-3 py-1 rounded-full"
                style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
              >
                عدد الموظفين: {employeeData.length}
              </span>
            </div>
            {employeeData.map((employee, index) => (
              <div
                className="mb-6 p-4 border-2 border-blue-300 rounded-lg bg-blue-50"
                key={index}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3
                    className="font-semibold text-blue-900"
                    style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
                  >
                    موظف رقم {index + 1}
                  </h3>
                  {employeeData.length > 1 && (
                    <button
                      onClick={() => handleRemoveEmployee(index)}
                      className="px-3 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
                    >
                      حذف
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="UserName"
                    placeholder="اسم المستخدم"
                    value={employee.UserName}
                    onChange={(e) => handleEmployeeChange(index, e)}
                    className="w-full p-3 border-2 border-gray-300 rounded-md text-gray-800 bg-white"
                    style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
                  />
                  <input
                    type="text"
                    name="AccountNameAr"
                    placeholder="اسم الموظف (بالعربية)"
                    value={employee.AccountNameAr}
                    onChange={(e) => handleEmployeeChange(index, e)}
                    className="w-full p-3 border-2 border-gray-300 rounded-md text-gray-800 bg-white"
                    style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
                  />
                  <input
                    type="text"
                    name="AccountNameEn"
                    placeholder="اسم الموظف (بالإنجليزية)"
                    value={employee.AccountNameEn}
                    onChange={(e) => handleEmployeeChange(index, e)}
                    className="w-full p-3 border-2 border-gray-300 rounded-md text-gray-800 bg-white"
                    style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
                  />
                  <input
                    type="email"
                    name="Email"
                    placeholder="البريد الإلكتروني"
                    value={employee.Email}
                    onChange={(e) => handleEmployeeChange(index, e)}
                    className="w-full p-3 border-2 border-gray-300 rounded-md text-gray-800 bg-white"
                    style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
                  />
                  <input
                    type="text"
                    name="Position"
                    placeholder="المنصب"
                    value={employee.Position}
                    onChange={(e) => handleEmployeeChange(index, e)}
                    className="w-full p-3 border-2 border-gray-300 rounded-md text-gray-800 bg-white"
                    style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
                  />
                  <input
                    type="text"
                    name="Mobile"
                    placeholder="رقم الجوال"
                    value={employee.Mobile}
                    onChange={(e) => handleEmployeeChange(index, e)}
                    className="w-full p-3 border-2 border-gray-300 rounded-md text-gray-800 bg-white"
                    style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
                  />
                  <input
                    type="number"
                    name="CompanyID"
                    placeholder="id رقم الشركة"
                    value={employee.CompanyID}
                    onChange={(e) => handleEmployeeChange(index, e)}
                    className="w-full p-3 border-2 border-gray-300 rounded-md text-gray-800 bg-white"
                    style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <select
                      name="IsRepresentative"
                      value={employee.IsRepresentative}
                      onChange={(e) => handleEmployeeChange(index, e)}
                      className="w-full p-3 border-2 border-gray-300 rounded-md text-gray-800 bg-white"
                      style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
                    >
                      <option value={1}>Representative (1)</option>
                      <option value={0}>Non-Representative (0)</option>
                    </select>
                    <select
                      name="IsManager"
                      value={employee.IsManager}
                      onChange={(e) => handleEmployeeChange(index, e)}
                      className="w-full p-3 border-2 border-gray-300 rounded-md text-gray-800 bg-white"
                      style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
                    >
                      <option value={0}>موظف عادي</option>
                      <option value={1}>مدير حساب</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={handleAddEmployee}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-semibold shadow-lg"
              style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
            >
              إضافة موظف جديد
            </button>
          </section>
        )}

        {/* Control Buttons */}
        <div className="flex flex-wrap gap-4 mb-6">
          <button
            onClick={generateSQLScript}
            className="px-8 py-4 bg-purple-700 text-white rounded-md hover:bg-purple-800 font-semibold shadow-lg"
            style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
          >
            إنشاء السكربت
          </button>
          {sqlScript && (
            <button
              onClick={copyToClipboard}
              className="px-8 py-4 bg-orange-600 text-white rounded-md hover:bg-orange-700 font-semibold shadow-lg"
              style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
            >
              نسخ السكربت
            </button>
          )}
          <button
            onClick={clearAllData}
            className="px-8 py-4 bg-red-600 text-white rounded-md hover:bg-red-700 font-semibold shadow-lg"
            style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
          >
            مسح جميع البيانات
          </button>
        </div>

        {/* SQL Script Display */}
        {sqlScript && (
          <div className="mt-6">
            <h3
              className="text-lg font-semibold mb-3 text-gray-800"
              style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
            >
              السكربت المُولد:
            </h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded-md overflow-auto max-h-96 border">
              <pre className="whitespace-pre-wrap text-sm font-mono">
                {sqlScript}
              </pre>
            </div>
            <div
              className="mt-2 text-sm text-gray-700 bg-gray-50 p-3 rounded border"
              style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
            >
              <p>عدد الأسطر: {sqlScript.split("\n").length}</p>
              <p>عدد الأحرف: {sqlScript.length}</p>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 pt-6 border-t-2 border-blue-200">
          <p
            className="text-center text-gray-600 text-sm"
            style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
          >
            تصميم أحمد الشحات
          </p>
        </div>
      </div>
    </div>
  );
}
