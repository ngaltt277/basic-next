import { Col, Row } from 'antd';
import { useForm } from 'react-hook-form';
import { useMemo } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '@/schema/retro-mileage-claim';
import { CheckboxGroup } from '@/components/form/checkbox';
import { Input } from '@/components/form/input';
import { RadioGroup } from '@/components/form/radio';
import { Button } from '@/components/form/button';

enum PartnerEnum {
  SQ = 'sq',
  OAL = 'oal',
  NonAirPartners = 'non-air partners',
}

enum ClaimEnum {
  KFMiles = 'kfMiles',
  EliteMiles = 'eliteMiles',
  PPSValue = 'ppsValue',
}

export function RetroMileageClaimContainer() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      partners: '',
      billingAirline: '',
      billingFlightNumber: '',
      billingClass: '',
      ticketingAirline: '',
      ticketingFlightNumber: '',
      ticketingClass: '',
      flightDate: undefined,
      ticketNumber: '',
      origin: '',
      destination: '',
      claims: [],
      kfMiles: '',
      eliteMiles: '',
      ppsValue: '',
      remarks: '',
    },
  });

  const claims = watch('claims');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const partners = [
    PartnerEnum.SQ,
    PartnerEnum.OAL,
    PartnerEnum.NonAirPartners,
  ];

  const partnerOptions = useMemo(
    () =>
      partners.map((partner) => {
        return { label: partner.toUpperCase(), value: partner };
      }),
    [partners],
  );

  const claimOptions = useMemo(
    () => [
      { value: ClaimEnum.KFMiles, label: 'KF Miles' },
      { value: ClaimEnum.EliteMiles, label: 'Elite Miles' },
      { value: ClaimEnum.PPSValue, label: 'PPS Value' },
    ],
    [],
  );

  const getClaimState = (value: string) =>
    !claims?.some((item) => item === value);

  // eslint-disable-next-line no-console
  const onSubmit = handleSubmit((data) => console.log(data));

  const renderPartners = () => {
    return (
      <RadioGroup name="partners" control={control} options={partnerOptions} />
    );
  };

  const renderClaimDetail = () => {
    return (
      <div className="form-section-content">
        <Row gutter={[16, 8]}>
          <Col lg={8} md={12} sm={24} xs={24}>
            <Input
              name="billingAirline"
              control={control}
              label="Billing airline"
            />
          </Col>
          <Col lg={8} md={12} sm={24} xs={24}>
            <Input
              name="billingFlightNumber"
              control={control}
              label="Billing flight number"
            />
          </Col>
          <Col lg={8} md={12} sm={24} xs={24}>
            <Input
              name="billingClass"
              control={control}
              label="Billing class"
            />
          </Col>
          <Col lg={8} md={12} sm={24} xs={24}>
            <Input
              name="ticketingAirline"
              control={control}
              label="Ticketing airline"
            />
          </Col>
          <Col lg={8} md={12} sm={24} xs={24}>
            <Input
              name="ticketingFlightNumber"
              control={control}
              label="Ticketing flight number"
            />
          </Col>
          <Col lg={8} md={12} sm={24} xs={24}>
            <Input
              name="ticketingClass"
              control={control}
              label="Ticketing class"
            />
          </Col>
        </Row>
        <Row gutter={[16, 8]}>
          <Col lg={8} md={12} sm={24} xs={24}>
            <Input name="flightDate" control={control} label="Flight date" />
          </Col>
          <Col lg={8} md={12} sm={24} xs={24}>
            <Input
              name="ticketNumber"
              control={control}
              label="Ticket number"
            />
          </Col>
        </Row>
        <Row gutter={[16, 8]}>
          <Col lg={8} md={12} sm={24} xs={24}>
            <Input name="origin" control={control} label="Origin" />
          </Col>
          <Col lg={8} md={12} sm={24} xs={24}>
            <Input name="destination" control={control} label="Destination" />
          </Col>
        </Row>
      </div>
    );
  };

  const renderClaimAmount = () => {
    return (
      <div className="form-section-content">
        <div>
          <label>Select claim</label>
          <CheckboxGroup
            name="claims"
            control={control}
            options={claimOptions}
          />
        </div>
        <Row gutter={[16, 8]}>
          <Col lg={4} md={6} sm={8} xs={24}>
            <Input
              name="kfMiles"
              control={control}
              label="KF Miles"
              disabled={getClaimState(ClaimEnum.KFMiles)}
            />
          </Col>
          <Col lg={4} md={6} sm={8} xs={24}>
            <Input
              name="eliteMiles"
              control={control}
              label="Elite Miles"
              disabled={getClaimState(ClaimEnum.EliteMiles)}
            />
          </Col>
          <Col lg={4} md={6} sm={8} xs={24}>
            <Input
              name="ppsValue"
              control={control}
              label="PPS Value"
              disabled={getClaimState(ClaimEnum.PPSValue)}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={16} md={20} sm={24} xs={24}>
            <Input name="remarks" control={control} label="Remarks" />
          </Col>
        </Row>
      </div>
    );
  };

  const formSections = [
    {
      title: '1. Select air / non-air partners',
      content: renderPartners(),
    },
    {
      title: '2. Enter claim details',
      content: renderClaimDetail(),
    },
    {
      title: '3. Enter claim amount',
      content: renderClaimAmount(),
      optional: true,
    },
  ];

  return (
    <div className="retro-mileage-claim">
      <h2 className="header">New retro mileage claim</h2>
      <hr />
      <form onSubmit={onSubmit}>
        {formSections.map((section) => (
          <div className="form-section" key={section.title}>
            <h4 className="form-section-title">
              {section.title}
              {section.optional && <span className="optional">(Optional)</span>}
            </h4>
            <div>{section.content}</div>
          </div>
        ))}
        <div className="form-footer">
          <Button label="Save" disabled={!isDirty} />
        </div>
      </form>
    </div>
  );
}
