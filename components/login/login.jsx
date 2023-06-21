import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function login() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E5E7EB' }}>
      <View style={{ flexDirection: 'row', overflow: 'hidden', backgroundColor: 'white', borderRadius: 8, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, maxWidth: '90%' }}>
        <View style={{ padding: 16, flex: 1, backgroundColor: '#3B82F6' }}>
          <View style={{ marginBottom: 12, alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
              K-WD
            </Text>
          </View>
          <Text style={{ textAlign: 'center', color: '#D1D5DB', marginBottom: 20 }}>
            With the power of K-WD, you can now focus only on functionaries for your digital products, while leaving the UI design on us!
          </Text>
          <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
            <Text style={{ marginBottom: 6 }}>Don't have an account?</Text>
            <Text style={{ textDecorationLine: 'underline' }}>Get Started!</Text>
          </View>
          <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 12, color: '#D1D5DB' }}>
            Read our <Text style={{ textDecorationLine: 'underline' }}>terms</Text> and <Text style={{ textDecorationLine: 'underline' }}>conditions</Text>
          </Text>
        </View>
        <View style={{ padding: 20, flex: 2, backgroundColor: 'white' }}>
          <Text style={{ marginBottom: 16, fontSize: 20, fontWeight: '600', color: '#4B5563' }}>
            Account Login
          </Text>
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontSize: 14, fontWeight: '600', color: '#6B7280' }}>Email address</Text>
            <TextInput
              style={{ padding: 8, borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 4, marginBottom: 8 }}
              autoCapitalize="none"
              autoFocus
            />
          </View>
          <View style={{ marginBottom: 16 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 14, fontWeight: '600', color: '#6B7280' }}>Password</Text>
              <Text style={{ fontSize: 12, color: '#3B82F6', textDecorationLine: 'underline' }}>Forgot Password?</Text>
            </View>
            <TextInput
              style={{ padding: 8, borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 4, marginBottom: 8 }}
              secureTextEntry
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
            <View style={{ width: 16, height: 16, borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 2, marginRight: 8 }} />
            <Text style={{ fontSize: 14, fontWeight: '600', color: '#6B7280' }}>Remember me</Text>
          </View>
          <View style={{ marginBottom: 24 }}>
            <Button
              title="Log in"
              onPress={() => {}}
              color="#3B82F6"
            />
          </View>
          <View style={{ marginBottom: 24 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
              <View style={{ height: 1, backgroundColor: '#9CA3AF', flex: 1 }} />
              <Text style={{ fontSize: 12, color: '#9CA3AF', fontWeight: 'normal', marginHorizontal: 8 }}>or login with</Text>
              <View style={{ height: 1, backgroundColor: '#9CA3AF', flex: 1 }} />
            </View>
            <View style={{ flexDirection: 'column', marginBottom: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 8, borderWidth: 1, borderColor: '#1F2937', borderRadius: 4, marginBottom: 8 }}>
                <View>
                  <SvgXml
                    xml={googleIcon} // Replace googleIcon with your own SVG icon
                    width={20}
                    height={20}
                  />
                </View>
                <Text style={{ fontSize: 14, fontWeight: '600', color: '#1F2937' }}>Cuenta de Google</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 8, borderWidth: 1, borderColor: '#3B82F6', borderRadius: 4 }}>
                <View>
                  <SvgXml
                    xml={facebookIcon} // Replace facebookIcon with your own SVG icon
                    width={20}
                    height={20}
                  />
                </View>
                <Text style={{ fontSize: 14, fontWeight: '600', color: '#3B82F6' }}>Facebook</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})