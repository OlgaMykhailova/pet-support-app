import { useEffect } from 'react';

import {
  LabelTitle,
  Input,
  Error,
  ButtonsSection,
  Button,
  SexSection,
  RadioBtnSex,
  LabelSex,
  Sex,
  FemaleIcon,
  MaleIcon,
  CommentInput,
  AddImagelabel,
  InputFile,
  AddPhoto,
  ImageThumb,
  Image,
  ImageDel,
  CancelIcon,
  ImgBox,
} from './ModalAddNotice.styled';

export const SecondPart = ({
  setStep,
  values,
  isValid,
  dirty,
  setFieldValue,
  imgUrl,
  setImgUrl,
}) => {
  const { typeOfNotice } = values;

  useEffect(() => {
    // set the value of price, based on typeOfNotice value
    if (typeOfNotice !== 'sell') {
      setFieldValue('price', 1);
    }
  }, [typeOfNotice, setFieldValue]);

  return (
    <div>
      <>
        <LabelTitle>
          The sex<span>*</span>:
        </LabelTitle>
        <>
          <SexSection role="group">
            <RadioBtnSex type="radio" name="sex" value="male" id="male" />
            <LabelSex htmlFor="male">
              <MaleIcon />
              <Sex>Male</Sex>
            </LabelSex>

            <RadioBtnSex type="radio" name="sex" value="female" id="female" />
            <LabelSex htmlFor="female">
              <FemaleIcon />
              <Sex>Female</Sex>
            </LabelSex>
          </SexSection>
        </>

        <Error name="sex" component="div" />
      </>

      <label>
        <LabelTitle>
          Location<span>*</span>:
        </LabelTitle>

        <Input name="location" placeholder="Type location" />
        <Error name="location" component="div" />
      </label>

      {values.typeOfNotice === 'sell' && (
        <>
          <label>
            <LabelTitle>
              Price<span>*</span>:
            </LabelTitle>
            <Input name="price" placeholder="Type price" />
            <Error name="price" component="div" />
          </label>
        </>
      )}

      <label>
        <LabelTitle>
          Load the pet’s image:<span>*</span>
        </LabelTitle>
        <div>
          <ImgBox>
            <AddImagelabel className={imgUrl ? 'show_img' : ''}>
              {!imgUrl && (
                <InputFile
                  name="img"
                  type="file"
                  value={imgUrl ? imgUrl : ''}
                  accept="image/png, image/jpeg"
                />
              )}
              <AddPhoto />
              <Error name="img" component="div" />
            </AddImagelabel>

            {imgUrl && (
              <ImageThumb>
                <Image src={imgUrl} alt="" width="60" />
                <ImageDel onClick={() => setImgUrl(null)}>
                  <CancelIcon />
                </ImageDel>
              </ImageThumb>
            )}
          </ImgBox>
        </div>
      </label>

      <label>
        <LabelTitle>
          <p>
            Comments <span>*</span>
          </p>
        </LabelTitle>
        <CommentInput
          component="textarea"
          name="comment"
          placeholder="Type comment"
        />
        <Error name="comment" component="div" />
      </label>

      <ButtonsSection>
        <Button
          type="submit"
          // name="done"
          disabled={!(isValid && dirty)}
        >
          Done
        </Button>
        <Button
          type="button"
          name="back"
          disabled={!isValid || !dirty}
          onClick={() => setStep(true)}
          //   onClick={Step}
        >
          Back
        </Button>
      </ButtonsSection>
    </div>
  );
};
