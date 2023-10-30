import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo } from 'react';
import { Col, Row } from 'antd';
import { Input } from '@/components/form/input';
import { Select } from '@/components/form/select';
import { Checkbox } from '@/components/form/checkbox';
import { GenderEnum, NationalityEnum, SalutationEnum } from '@/enums/passport';
import { schema } from '@/schema/passport';
import { Button } from '@/components/form/button';

export function PassportContainer() {
  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      salutation: SalutationEnum.Mr,
      familyName: '',
      givenName: '',
      nameOfCorrespondence: '',
      dateOfBirth: undefined,
      gender: GenderEnum.Male,
      nationality: NationalityEnum.Singapore,
      countryOfResidence: NationalityEnum.Singapore,
      firstAlternateLastName: '',
      firstAlternateFirstName: '',
      secondAlternateLastName: '',
      secondAlternateFirstName: '',
    },
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  const salutationOptions = useMemo(
    () => [
      {
        label: SalutationEnum.Mr,
        value: SalutationEnum.Mr,
      },
      {
        label: SalutationEnum.Mrs,
        value: SalutationEnum.Mrs,
      },
      {
        label: SalutationEnum.Miss,
        value: SalutationEnum.Miss,
      },
    ],
    [],
  );

  const genderOptions = useMemo(
    () => [
      {
        label: GenderEnum.Male,
        value: GenderEnum.Male,
      },
      {
        label: GenderEnum.Female,
        value: GenderEnum.Female,
      },
    ],
    [],
  );

  const nationalityOptions = useMemo(
    () => [
      {
        label: NationalityEnum.Singapore,
        value: NationalityEnum.Singapore,
      },
      {
        label: NationalityEnum.Vietnam,
        value: NationalityEnum.Vietnam,
      },
      {
        label: NationalityEnum.Thailand,
        value: NationalityEnum.Thailand,
      },
    ],
    [],
  );

  return (
    <div className="passport">
      <div className="passport-header">
        <h2>Basic Information</h2>
        <hr />
      </div>

      <form onSubmit={onSubmit} className="passport-form">
        <div className="form-section">
          <h3 className="sub-title required">Name</h3>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Row gutter={[16, 16]}>
                <Col xs={12} sm={8} md={6} lg={3}>
                  <Select
                    name="salutation"
                    label="Salutation"
                    control={control}
                    options={salutationOptions}
                    autoFocus={true}
                  />
                </Col>
                <Col lg={6} md={8} sm={12} xs={24}>
                  <Input
                    name="familyName"
                    label="Family Name"
                    control={control}
                  />
                </Col>
                <Col lg={6} md={8} sm={12} xs={24}>
                  <Input
                    name="givenName"
                    label="Given Name"
                    control={control}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row gutter={[16, 16]}>
                <Col lg={6} md={8} sm={12} xs={24}>
                  <Input
                    name="nameOfCorrespondence"
                    label="Name Of Correspondence"
                    control={control}
                  />
                </Col>
                <Col flex="auto" offset={3}>
                  <Checkbox
                    name="isNoGivenName"
                    label="No first/given name in the passport"
                    control={control}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="form-section">
          <h3 className="sub-title required">Other</h3>
          <Row gutter={[16, 16]}>
            <Col lg={6} md={8} sm={12} xs={24}>
              <Input
                name="dateOfBirth"
                label="Date of Birth (DD-MM-YYYY)"
                control={control}
                type="date"
              />
            </Col>
            <Col lg={4} md={6} sm={12} xs={24}>
              <Select
                name="gender"
                label="Gender"
                control={control}
                options={genderOptions}
              />
            </Col>
            <Col lg={6} md={8} sm={12} xs={24}>
              <Select
                name="nationality"
                label="Nationality"
                control={control}
                options={nationalityOptions}
              />
            </Col>
            <Col lg={6} md={8} sm={12} xs={24}>
              <Select
                name="countryOfResidence"
                label="Country of Residence"
                control={control}
                options={nationalityOptions}
              />
            </Col>
          </Row>
        </div>
        <div className="form-section">
          <h3 className="sub-title">Alternate name</h3>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Row gutter={[16, 16]}>
                <Col lg={6} md={8} sm={12} xs={24}>
                  <Input
                    name="firstAlternateLastName"
                    label="Alternate Last Name"
                    control={control}
                  />
                </Col>
                <Col lg={6} md={8} sm={12} xs={24}>
                  <Input
                    name="firstAlternateFirstName"
                    label="Alternate First Name"
                    control={control}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row gutter={[16, 16]}>
                <Col lg={6} md={8} sm={12} xs={24}>
                  <Input
                    name="secondAlternateLastName"
                    label="Alternate Last Name"
                    control={control}
                  />
                </Col>
                <Col lg={6} md={8} sm={12} xs={24}>
                  <Input
                    name="secondAlternateFirstName"
                    label="Alternate First Name"
                    control={control}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="form-footer">
          <Button label="Save" disabled={!isDirty} />
        </div>
      </form>
    </div>
  );
}
